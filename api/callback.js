export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Código de autorização não recebido.");
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res
      .status(500)
      .send("Credenciais do GitHub não configuradas no Vercel.");
  }

  try {
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Geane-Macedo-Decap-CMS",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
        }),
      }
    );

    const data = await response.json();

    if (data.error || !data.access_token) {
      const errorMessage =
        data.error_description || data.error || "Falha na autenticação.";

      const message = `authorization:github:error:${JSON.stringify(
        errorMessage
      )}`;

      return res
        .status(200)
        .setHeader("Content-Type", "text/html")
        .send(`
          <!DOCTYPE html>
          <html>
          <body>
            <script>
              (function () {
                const message = ${JSON.stringify(message)};

                function receiveMessage(event) {
                  if (window.opener) {
                    window.opener.postMessage(message, event.origin);
                  }

                  window.removeEventListener(
                    "message",
                    receiveMessage,
                    false
                  );

                  setTimeout(function () {
                    window.close();
                  }, 500);
                }

                window.addEventListener(
                  "message",
                  receiveMessage,
                  false
                );

                if (window.opener) {
                  window.opener.postMessage(
                    "authorizing:github",
                    "*"
                  );
                }
              })();
            </script>
          </body>
          </html>
        `);
    }

    const payload = {
      token: data.access_token,
      provider: "github",
    };

    const message =
      "authorization:github:success:" +
      JSON.stringify(payload);

    res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
    res.setHeader("Content-Type", "text/html");

    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <body>
        <script>
          (function () {
            const message = ${JSON.stringify(message)};

            function receiveMessage(event) {
              if (window.opener) {
                window.opener.postMessage(
                  message,
                  event.origin
                );
              }

              window.removeEventListener(
                "message",
                receiveMessage,
                false
              );

              setTimeout(function () {
                window.close();
              }, 500);
            }

            window.addEventListener(
              "message",
              receiveMessage,
              false
            );

            if (window.opener) {
              window.opener.postMessage(
                "authorizing:github",
                "*"
              );
            }
          })();
        </script>
      </body>
      </html>
    `);
  } catch (error) {
    return res
      .status(500)
      .send("Erro na autenticação com o GitHub.");
  }
}

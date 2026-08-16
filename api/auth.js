export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return res.status(500).send("GITHUB_CLIENT_ID não configurado.");
  }

  const redirectUri = `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}/api/callback`;

  const githubUrl = new URL("https://github.com/login/oauth/authorize");

  githubUrl.searchParams.set("client_id", clientId);
  githubUrl.searchParams.set("redirect_uri", redirectUri);
  githubUrl.searchParams.set("scope", "repo");

  res.writeHead(302, {
    Location: githubUrl.toString(),
  });

  res.end();
}

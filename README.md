# Blog — Geane de Almeida Macedo | Advocacia Imobiliária

Blog jurídico estático construído com **Next.js 14 (App Router) + Tailwind CSS**,
com artigos em Markdown, SEO (metadados, sitemap, robots, JSON-LD) e formulário
de contato integrado ao Google Forms.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera o site estático na pasta /out
```

## Publicar um novo artigo

1. Crie um arquivo `.md` em `content/posts/` com o nome igual ao slug
   (ex.: `itbi-salvador-quando-pagar.md`).
2. Use o frontmatter do modelo (veja qualquer artigo existente):
   `title, description, date, category, tags, keywords, author, readingTime`.
3. Categorias válidas: `contratos`, `regularizacao`, `litigios`, `condominios`,
   `tributario-imobiliario`, `mercado`.
4. Faça commit — o deploy é automático nas plataformas abaixo.

> Dica: no Claude, com a skill **artigos-imobiliarios** instalada, peça
> "escreva um artigo sobre X" e cole o `.md` entregue direto nesta pasta.

## Antes de ir ao ar (checklist)

- [ ] Trocar `https://www.exemplo.com.br` pelo domínio real em
      `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts`.
- [ ] Preencher OAB, e-mail e WhatsApp em `components/Footer.tsx`,
      `app/contato/page.tsx` e `app/sobre/page.tsx`.
- [ ] Configurar o Google Forms (abaixo).
- [ ] Substituir `public/logo.svg` pelo logotipo definitivo, se houver.

## Formulário de contato → Google Forms/Sheets

As respostas caem automaticamente no Google Sheets vinculado ao formulário
(acessível pelo Google Drive/Docs).

1. Crie um formulário em https://docs.google.com/forms com os campos:
   **Nome, E-mail, Telefone, Assunto, Mensagem** (todos "resposta curta",
   exceto Mensagem: "parágrafo").
2. Clique em **Enviar → ícone de link** e abra o formulário publicado.
3. Na página aberta, clique com o botão direito → **Inspecionar** e procure
   por `entry.` — cada campo tem um `name="entry.XXXXXXXXXX"`.
   (Alternativa: menu ⋮ → "Receber link pré-preenchido", preencha e envie;
   os códigos `entry.` aparecem na URL gerada.)
4. Em `components/ContactForm.tsx`, substitua:
   - `GOOGLE_FORM_ID` pelo ID que aparece na URL `.../d/e/<ID>/viewform`;
   - os cinco `entry.XXXX` pelos códigos reais.
5. No Forms, aba **Respostas → ícone do Sheets**, vincule uma planilha para
   receber os contatos.

## Deploy

**Vercel:** importe o repositório em vercel.com — detecta Next.js sozinho.
**Netlify:** build command `npm run build`, publish directory `out`.
**Cloudflare Pages:** framework preset "Next.js (Static HTML Export)",
build `npm run build`, output `out`.

Em todos os casos, basta conectar o repositório Git (GitHub/GitLab) e cada
`git push` publica o site atualizado.

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // gera site estático: funciona em Vercel, Netlify e Cloudflare Pages
  trailingSlash: true,
  images: { unoptimized: true }
};
export default nextConfig;

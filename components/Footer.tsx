import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-tinta text-pergaminho/80 mt-20">
      <div className="mx-auto max-w-5xl px-5 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <p className="font-display text-pergaminho text-base font-semibold">Geane de Almeida Macêdo</p>
<p>Advogada • Direito Imobiliário e Direito Extrajudicial • OAB/BA nº 70.923</p>
<p>Salvador – Bahia</p>
        </div>
        <div>
          <p className="uppercase tracking-[0.18em] text-[0.7rem] text-latao mb-2">Navegação</p>
          <ul className="space-y-1">
            <li><Link href="/servicos/" className="hover:text-latao">Serviços</Link></li>
            <li><Link href="/blog/" className="hover:text-latao">Blog</Link></li>
            <li><Link href="/contato/" className="hover:text-latao">Contato</Link></li>
          </ul>
        </div>
        <div>
          <p className="uppercase tracking-[0.18em] text-[0.7rem] text-latao mb-2">Aviso</p>
          <p>Conteúdo meramente informativo, em conformidade com o Provimento 205/2021 da OAB. Não substitui a consulta a um advogado.</p>
        </div>
      </div>
      <div className="border-t border-pergaminho/15 py-4 text-center text-xs">
        © {new Date().getFullYear()} Geane de Almeida Macedo | Advocacia Imobiliária
      </div>
    </footer>
  );
}

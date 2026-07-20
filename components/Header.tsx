import Link from 'next/link';
import Image from 'next/image';

const nav = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/servicos/', label: 'Serviços' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contato/', label: 'Contato' }
];

export default function Header() {
  return (
    <header className="bg-tinta text-pergaminho">
      <div className="mx-auto max-w-5xl px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="" width={40} height={40} />
          <span className="font-display text-lg leading-tight">
            Geane de Almeida Macedo
            <span className="block text-[0.68rem] font-body uppercase tracking-[0.22em] text-latao">
              Advocacia Imobiliária
            </span>
          </span>
        </Link>
        <nav aria-label="Principal" className="flex gap-5 text-sm">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className="hover:text-latao transition-colors">
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

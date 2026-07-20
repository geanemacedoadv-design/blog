import type { Metadata } from 'next';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', weight: ['500', '600'] });
const source = Source_Sans_3({ subsets: ['latin'], variable: '--font-source' });

const SITE = 'https://www.exemplo.com.br'; // TODO: trocar pelo domínio real

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Geane de Almeida Macedo | Advocacia Imobiliária',
    template: '%s | Geane de Almeida Macedo'
  },
  description:
    'Blog jurídico de Direito Imobiliário: contratos, regularização de imóveis, usucapião, litígios e tributação imobiliária, em linguagem acessível.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Geane de Almeida Macedo | Advocacia Imobiliária'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${source.variable}`}>
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

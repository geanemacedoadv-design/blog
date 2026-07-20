import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

const areas = [
  ['Contratos imobiliários', 'Compra e venda, promessa, permuta, locação e built to suit com segurança jurídica.'],
  ['Regularização de imóveis', 'Usucapião judicial e extrajudicial, retificação de registro e inventário com imóveis.'],
  ['Due diligence', 'Análise de riscos e certidões antes de comprar, vender ou investir.'],
  ['Litígios imobiliários', 'Distratos, atraso de obra, vícios construtivos e adjudicação compulsória.'],
  ['Condomínios e incorporação', 'Assessoria a síndicos, construtoras e incorporadoras.'],
  ['Tributário imobiliário', 'ITBI, ITCMD, ganho de capital e holding familiar.']
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <section className="bg-tinta text-pergaminho">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="selo !text-latao !border-latao/50 mb-6">Salvador · Bahia · Direito Imobiliário</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
            Segurança jurídica para quem compra, vende e investe em imóveis.
          </h1>
          <p className="mt-6 max-w-2xl text-pergaminho/80 text-lg">
            Conteúdo técnico em linguagem acessível e atendimento dedicado em contratos,
            regularização e litígios imobiliários.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/contato/" className="bg-latao text-tinta font-semibold px-6 py-3 rounded hover:bg-latao/90">
              Fale sobre seu caso
            </Link>
            <Link href="/blog/" className="border border-pergaminho/40 px-6 py-3 rounded hover:border-latao hover:text-latao">
              Ler o blog
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold mb-8">Áreas de atuação</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map(([t, d]) => (
            <div key={t} className="bg-white border border-tinta/10 rounded-md p-6">
              <h3 className="font-display text-lg font-semibold mb-2">{t}</h3>
              <p className="text-sm text-grafite">{d}</p>
            </div>
          ))}
        </div>
        <Link href="/servicos/" className="inline-block mt-6 text-latao hover:text-argila">
          Conhecer todos os serviços →
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-4 pb-16">
        <h2 className="font-display text-3xl font-semibold mb-8">Últimos artigos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  );
}

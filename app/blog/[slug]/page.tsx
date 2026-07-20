import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getPost } from '@/lib/posts';

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { meta } = await getPost(params.slug);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: { type: 'article', publishedTime: meta.date, authors: [meta.author] }
  };
}

export default async function Artigo({ params }: { params: { slug: string } }) {
  const { meta, contentHtml } = await getPost(params.slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    inLanguage: 'pt-BR',
    author: { '@type': 'Person', name: meta.author, jobTitle: 'Advogada' }
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-wrap items-center gap-3 text-xs text-grafite mb-5">
        <Link href={`/categoria/${meta.category}/`} className="selo hover:border-latao">{meta.categoryLabel}</Link>
        <time dateTime={meta.date}>{meta.dateLabel}</time>
        <span>· {meta.readingTime} min de leitura</span>
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-8">{meta.title}</h1>
      <div className="prose-artigo" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <div className="mt-10 flex flex-wrap gap-2 text-sm">
        {meta.tags.map(t => (
          <Link key={t} href={`/tag/${t}/`} className="text-latao hover:text-argila">#{t}</Link>
        ))}
      </div>
      <div className="mt-10 border border-tinta/15 rounded-md p-6 bg-white">
        <p className="font-display font-semibold mb-1">Precisa de orientação sobre o seu caso?</p>
        <p className="text-sm text-grafite mb-3">Cada situação exige análise individual dos documentos e do contexto.</p>
        <Link href="/contato/" className="text-latao hover:text-argila text-sm">Entrar em contato →</Link>
      </div>
    </article>
  );
}

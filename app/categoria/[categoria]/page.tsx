import type { Metadata } from 'next';
import { getAllPosts, CATEGORIES } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(categoria => ({ categoria }));
}

export function generateMetadata({ params }: { params: { categoria: string } }): Metadata {
  const label = CATEGORIES[params.categoria] ?? params.categoria;
  return { title: `Categoria: ${label}`, description: `Artigos de Direito Imobiliário na categoria ${label}.` };
}

export default function Categoria({ params }: { params: { categoria: string } }) {
  const posts = getAllPosts().filter(p => p.category === params.categoria);
  const label = CATEGORIES[params.categoria] ?? params.categoria;
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="selo mb-4">Categoria</p>
      <h1 className="font-display text-4xl font-semibold mb-8">{label}</h1>
      {posts.length === 0
        ? <p className="text-grafite">Ainda não há artigos nesta categoria. Volte em breve.</p>
        : <div className="grid gap-6 md:grid-cols-2">{posts.map(p => <PostCard key={p.slug} post={p} />)}</div>}
    </div>
  );
}

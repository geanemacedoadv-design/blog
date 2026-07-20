import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllTags, CATEGORIES } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos sobre Direito Imobiliário: usucapião, contratos, distrato, due diligence e tributação de imóveis, em linguagem acessível.'
};

export default function Blog() {
  const posts = getAllPosts();
  const tags = getAllTags();
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="selo mb-4">Blog</p>
      <h1 className="font-display text-4xl font-semibold mb-8">Artigos</h1>

      <div className="mb-10 flex flex-wrap gap-2 text-sm">
        {Object.entries(CATEGORIES).map(([slug, label]) => (
          <Link key={slug} href={`/categoria/${slug}/`} className="selo hover:border-latao">
            {label}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(p => <PostCard key={p.slug} post={p} />)}
      </div>

      <h2 className="font-display text-2xl font-semibold mt-14 mb-4">Tags</h2>
      <div className="flex flex-wrap gap-2 text-sm">
        {tags.map(t => (
          <Link key={t} href={`/tag/${t}/`} className="text-latao hover:text-argila">#{t}</Link>
        ))}
      </div>
    </div>
  );
}

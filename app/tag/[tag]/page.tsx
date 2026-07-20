import type { Metadata } from 'next';
import { getAllPosts, getAllTags } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export function generateStaticParams() {
  return getAllTags().map(tag => ({ tag }));
}

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
  return { title: `Tag: ${params.tag}`, description: `Artigos de Direito Imobiliário com a tag ${params.tag}.` };
}

export default function Tag({ params }: { params: { tag: string } }) {
  const posts = getAllPosts().filter(p => p.tags.includes(params.tag));
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="selo mb-4">Tag</p>
      <h1 className="font-display text-4xl font-semibold mb-8">#{params.tag}</h1>
      <div className="grid gap-6 md:grid-cols-2">{posts.map(p => <PostCard key={p.slug} post={p} />)}</div>
    </div>
  );
}

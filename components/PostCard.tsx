import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="bg-white border border-tinta/10 rounded-md p-6 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 text-xs text-grafite">
        <Link href={`/categoria/${post.category}/`} className="selo hover:border-latao">{post.categoryLabel}</Link>
        <time dateTime={post.date}>{post.dateLabel}</time>
        <span>· {post.readingTime} min de leitura</span>
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug">
        <Link href={`/blog/${post.slug}/`} className="hover:text-argila">{post.title}</Link>
      </h3>
      <p className="text-sm text-grafite">{post.description}</p>
      <Link href={`/blog/${post.slug}/`} className="text-sm text-latao mt-auto hover:text-argila">
        Ler artigo →
      </Link>
    </article>
  );
}

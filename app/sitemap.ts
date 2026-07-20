import type { MetadataRoute } from 'next';
import { getAllPosts, getAllTags, CATEGORIES } from '@/lib/posts';

const SITE = 'https://www.exemplo.com.br'; // TODO: trocar pelo domínio real
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const fixas = ['', 'sobre/', 'servicos/', 'contato/', 'blog/'].map(p => ({
    url: `${SITE}/${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8
  }));
  const posts = getAllPosts().map(p => ({
    url: `${SITE}/blog/${p.slug}/`, lastModified: p.date, changeFrequency: 'yearly' as const, priority: 0.7
  }));
  const cats = Object.keys(CATEGORIES).map(c => ({ url: `${SITE}/categoria/${c}/`, priority: 0.5 }));
  const tags = getAllTags().map(t => ({ url: `${SITE}/tag/${t}/`, priority: 0.3 }));
  return [...fixas, ...posts, ...cats, ...tags];
}

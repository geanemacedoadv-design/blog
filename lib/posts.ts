import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export const CATEGORIES: Record<string, string> = {
  contratos: 'Contratos',
  regularizacao: 'Regularização',
  litigios: 'Litígios',
  condominios: 'Condomínios',
  'tributario-imobiliario': 'Tributário Imobiliário',
  mercado: 'Mercado'
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  keywords: string[];
  author: string;
  readingTime: number;
};

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  const date = String(data.date ?? '');
  const category = String(data.category ?? 'mercado');
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    date,
    dateLabel: new Date(date + 'T12:00:00').toLocaleDateString('pt-BR', {
      day: '2-digit', month: 'long', year: 'numeric'
    }),
    category,
    categoryLabel: CATEGORIES[category] ?? category,
    tags: (data.tags as string[]) ?? [],
    keywords: (data.keywords as string[]) ?? [],
    author: String(data.author ?? 'Geane de Almeida Macedo'),
    readingTime: Number(data.readingTime ?? 6)
  };
}

export function getAllPosts(): PostMeta[] {
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const { data } = matter(fs.readFileSync(path.join(postsDir, f), 'utf8'));
      return toMeta(f.replace(/\.md$/, ''), data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { meta: toMeta(slug, data), contentHtml: processed.toString() };
}

export function getAllTags(): string[] {
  return Array.from(new Set(getAllPosts().flatMap(p => p.tags))).sort();
}

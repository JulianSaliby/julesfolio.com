import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // A project can live in several galleries — flagships span disciplines.
    disciplines: z
      .array(z.enum(['videography', 'photography', 'graphic-design', 'industrial-design']))
      .min(1),
    year: z.number(),
    weight: z.enum(['hero', 'featured', 'standard', 'minor']),
    client: z.string().optional(),
    role: z.array(z.string()).default([]),
    cover: z.string(), // extension-less asset path, e.g. "covers/photo"
    summary: z.string(),
    featured_home: z.boolean().default(false),
    home_order: z.number().optional(), // order of flagships on the home page
  }),
});

export const collections = { projects };

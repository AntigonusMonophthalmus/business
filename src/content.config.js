import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    lang: z.enum(['cs', 'en']),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    price: z.string().optional(),
  }),
});

const hours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hours' }),
  schema: z.object({
    lang: z.enum(['cs', 'en']),
    schedule: z.array(
      z.object({
        label: z.string(),
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().default(false),
        note: z.string().optional(),
      })
    ),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/gallery' }),
  schema: z.object({
    lang: z.enum(['cs', 'en']),
    images: z.array(
      z.object({
        file: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = { services, hours, gallery };
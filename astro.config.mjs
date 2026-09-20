import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://r0liveir.github.io',
  base: '/ai-engineering-uspcodelab',
  integrations: [
    starlight({
      title: 'Applied AI Engineering',
      locales: {
        root: { label: 'Português', lang: 'pt-BR' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/r0liveir/ai-engineering-uspcodelab',
        },
      ],
      sidebar: [
        {
          label: 'Aulas',
          items: [
            { label: 'First Contact, I', slug: 'the-foundations-0' },
            { label: 'First Contact, II', slug: 'the-foundations-1' },
            { label: 'Prompt Engineering', slug: 'prompt-engineering' },
          ],
        },
      ],
    }),
  ],
});

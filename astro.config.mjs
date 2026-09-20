import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
    site: 'https://r0liveir.github.io',
    base: '/ai-engineering-uspcodelab',
    markdown: {
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        }),
    },
    integrations: [
        starlight({
            title: "USPCodeLab's Applied AI Engineering",
            customCss: ['./src/styles/katex.css'],
            locales: {
                root: { label: 'Português', lang: 'pt-BR' },
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
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

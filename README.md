# Applied AI Engineering

Material do curso introdutório de Applied AI Engineering da USPCodeLab. O site
é feito com Astro Starlight e publicado no GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor local informa a URL ao iniciar. Para validar a versão de produção:

```bash
npm run build
```

## Editando as aulas

Cada aula fica em `src/content/docs/<aula>/index.md`. Imagens e outros arquivos
específicos da aula podem ficar no mesmo diretório, por exemplo:

```text
src/content/docs/nova-aula/
├── index.md
├── assets/
├── slides/
└── snippets/
```

Use caminhos relativos para imagens, como `![Descrição](./assets/imagem.png)`.
Para adicionar uma aula à navegação, inclua seu slug em `astro.config.mjs`.

O frontmatter mínimo de uma aula é:

```yaml
---
title: Título da aula
---
```

Equações inline usam `$...$`; equações em bloco usam `$$` em linhas separadas.
Alterações enviadas para `main` são publicadas pelo workflow do GitHub Pages.

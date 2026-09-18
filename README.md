# Portfólio — Ryan Vetoriano

Site pessoal com estudos de caso dos projetos em que trabalho.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · MDX · Vitest

## Rodando

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | build de produção (todas as páginas são estáticas) |
| `npm run lint` | ESLint |
| `npm run typecheck` | gera os tipos de rota do Next e roda o `tsc` |
| `npm test` | Vitest |

O CI roda os quatro últimos a cada push e pull request.

## Como o conteúdo funciona

- `src/content/projects.ts` — a lista de projetos: título, resumo, stack, links.
  É a fonte dos cards da página inicial e das rotas de estudo de caso.
- `src/content/projetos/<slug>.mdx` — o texto de cada estudo de caso.
- `src/mdx-components.tsx` — componentes disponíveis em qualquer `.mdx`
  sem import (`Callout`, `DiagnosticMatrix`, `Pipeline`).

### Adicionando um estudo de caso

1. Crie `src/content/projetos/<slug>.mdx`.
2. Em `projects.ts`, marque `hasCaseStudy: true` no projeto com esse slug.

Os dois passos andam juntos: um teste falha se a flag e o arquivo divergirem,
e a rota `/projetos/[slug]` só existe para projetos com estudo de caso —
qualquer outro slug é 404.

## Sobre os projetos da GEMM

O código do Creative Lab e do Product Manager é da empresa e fica em
repositórios privados. Os estudos de caso descrevem problema, decisões e
trade-offs sem expor código, dados ou detalhes de segurança.

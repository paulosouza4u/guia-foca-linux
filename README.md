# Guia Foca Linux (Site)

Projeto Gatsby para publicação do conteúdo do Guia Foca Linux.
___________________________________
Guia Foca Linux estilizado e com busca utilizando framework Gatsby com arquitetura JamStack.

## Stack

- Gatsby 5
- React 18
- Bootstrap 5 (com Bootstrap Icons)
- MDX via `@mdx-js/react` e `gatsby-plugin-mdx`
- Otimização de imagens com `gatsby-plugin-image`/`sharp`
- ESLint 9 (com `eslint-plugin-react` e `@eslint/js`)

## Requisitos

- Node.js LTS (recomendado)
- npm (gerenciador de pacotes)

## Instalação

- npm install

## Desenvolvimento

- Iniciar ambiente de desenvolvimento com hot-reload:
    - npm run develop

Acesse em: http://localhost:8000  
Interface GraphiQL: http://localhost:8000/___graphql

## Build

- Gerar build de produção:
    - npm run build
- Pré-visualizar a build:
    - npm run serve
- Limpar cache:
    - npm run clean

Acesse em: http://localhost:9000

## Scripts (npm)

- `develop`: inicia o servidor de desenvolvimento do Gatsby
- `build`: gera o site estático em `public/`
- `serve`: serve a pasta `public/` localmente
- `lint`: roda o ESLint
- `lint:fix`: corrige problemas auto-fixáveis

(Consulte `package.json` para a lista completa e parâmetros.)

## Estrutura

- `src/`: código-fonte do site (páginas, componentes, estilos, conteúdo)
- `gatsby-config.js`: plugins e metadados
- `gatsby-browser.js`: personalizações no lado do cliente
- `public/`: saída do build (gerada)
- `.cache/` e `node_modules/`: pastas internas (geradas)
- `eslint.config.mjs`: configuração do ESLint

## Conteúdo e MDX

O conteúdo pode ser escrito em Markdown/MDX. O plugin `gatsby-plugin-mdx` está configurado para processar arquivos MDX e
integrar componentes React dentro do conteúdo.

## Imagens

Use os componentes do `gatsby-plugin-image` para imagens otimizadas (StaticImage/GatsbyImage). A pipeline `sharp`
melhora desempenho e formatos.

## Estilos

Bootstrap 5 está disponível. Ícones via `bootstrap-icons`. Você pode importar estilos globais e/ou usar classes
utilitárias do Bootstrap.

## Qualidade de Código

ESLint está configurado para React e JavaScript moderno:

- npm run lint npm run lint:fix

## Licença

Este projeto está licenciado sob os termos da licença presente no arquivo `GNU Free Documentation License`.

___________________________________

# GUIA FOCA

## Verões:

- Iniciante + Intermediário :: v 6.02 | 20200727 08:44
- Avançado :: v 7.02 | 20200727 08:31
- Segurança :: v 1.00 | 20200727 22:44

### Fonte: https://www.guiafoca.org/

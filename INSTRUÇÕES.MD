# Teste-Frontend-2023

## 🚀 Como rodar o projeto

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto.
3. Instale as dependências do projeto com o comando `npm install`.
4. Inicie o servidor de desenvolvimento com o comando `npm run dev`.
5. Abra o navegador e acesse `http://localhost:3000`.

## 🚀 Como testar o projeto

2. npm run lint
1. npm run test

## 📦 Dependências do projeto

O projeto usa várias dependências e ferramentas de desenvolvimento. Aqui estão as principais:

- `react` e `react-dom`: Bibliotecas para construir a interface do usuário.
- `axios`: Biblioteca para fazer requisições HTTP.
- `json-server`: Biblioteca para criar uma API REST falsa.
- `node-sass` e `sass`: Bibliotecas para compilar arquivos SCSS em CSS.
- `styled-components`: Biblioteca para estilizar componentes React.
- `react-router-dom`: Biblioteca para roteamento no React.
- `react-icons`: Biblioteca de ícones para React.
- `typescript`: Superset do JavaScript que adiciona tipos estáticos.
- `eslint`: Ferramenta de linting para JavaScript e TypeScript.
- `vite`: Ferramenta de construção que fornece um ambiente de desenvolvimento mais rápido.
- `vitest`: Ferramenta de teste para Vite.
- `@testing-library/react`, `@testing-library/user-event`, `@testing-library/dom`, e `@testing-library/jest-dom`: Bibliotecas para testar componentes React.

## 📝 Observações

O projeto estava recebendo erros de Cross-Origin Resource Sharing (CORS) da API. Para contornar isso, o projeto usa uma versão mockup dos dados se ocorrer um erro ao buscar dados da API. Isso é feito principalmente para fins de entrevista e não deve ser usado em um ambiente de produção real.

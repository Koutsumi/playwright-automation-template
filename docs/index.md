# PlayPattern

## Visão Geral

Este repositório passa a ser a base de referência para projetos de automação com Playwright na empresa.

O objetivo da documentação é deixar claros:

- o padrão de estrutura do projeto;
- a separação entre testes `api` e `e2e`;
- a organização por módulos;
- os pontos de extensão que variam entre projetos;
- a convenção para integrações com banco de dados em `shared/database`.

## O que este template resolve

- acelera a criação de novos projetos de automação;
- reduz divergência entre times;
- facilita onboarding;
- padroniza setup, naming e organização dos testes;
- centraliza exemplos de integração com recursos compartilhados.

## Pilares do template

- `Playwright` como executor principal de testes.
- `TypeScript` para tipagem e reuso.
- Estrutura modular para API e E2E.
- `shared/` para utilitários comuns entre módulos.
- Banco de dados tratado como detalhe de projeto, mas sempre configurado em `shared/database`.
- `Page Objects` com uma classe por página para os testes E2E.
- `fixtures` centralizados para usuários e massas reutilizáveis.
- `auth.setup.ts` como ponto de preparação lógica de usuários e sessão.

## Quando adaptar

Cada projeto pode mudar:

- módulos disponíveis;
- variáveis de ambiente;
- massa de dados;
- estratégia de autenticação;
- banco utilizado.

O que não deve mudar sem necessidade é a organização base do template. Isso mantém previsibilidade entre repositórios e reduz custo de manutenção.

## O que já está exemplificado neste template

- módulo `auth` como referência mínima;
- testes `success` e `errors` para API e E2E;
- padrão de escrita com `Arrange`, `Act` e `Assert`;
- `Page Object` de login em `pages/auth/login.page.ts`;
- `fixtures/users.ts` inspirado no repositório `padrao`;
- estrutura de setup com comentários explicando preparo via banco e persistência de cookies.

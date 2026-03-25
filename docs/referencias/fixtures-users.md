# Fixture de Usuarios

O arquivo `fixtures/users.ts` segue o mesmo espirito do repositório `padrao`.

## Estrutura recomendada

- `admin()` para perfis fixos e previsiveis;
- `user(...)` para gerar usuarios dinamicos por execucao;
- tipos compartilhados vindo do modulo correspondente.

## Objetivo

Centralizar a definicao de usuarios usados em setup, API e E2E.

## Beneficios

- reduz duplicacao;
- facilita manutencao de credenciais;
- deixa claro quais perfis existem no projeto.

## Adaptacoes esperadas

Cada projeto deve ajustar:

- dominio de email;
- senha padrao;
- nomes de perfis;
- roles reais da aplicacao.

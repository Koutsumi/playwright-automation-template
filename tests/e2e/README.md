# tests/e2e

Esta pasta reúne os testes E2E do projeto.

## O que deve conter

- uma pasta por módulo funcional;
- arquivos `.setup.ts` quando houver preparação de sessão, cookies ou estado inicial;
- arquivos `.spec.ts` com fluxos completos do usuário.

## Padrões

- espelhe os módulos registrados em `modules/e2eModules.ts`;
- use `pages/` para abstrair interações de interface;
- mantenha os testes legíveis, com foco em comportamento do usuário;
- se precisar de massa ou integração, reutilize `fixtures/`, `modules/` e `shared/`.

## O que validar

- navegação;
- renderização de telas críticas;
- regras de permissão visíveis ao usuário;
- fluxos principais e mensagens de erro importantes.

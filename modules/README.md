# modules

Esta pasta concentra a organização funcional do projeto.

## Objetivo

Cada módulo representa um domínio de negócio da aplicação, como `auth`, `users`, `programs` ou `proponents`.

## O que deve existir aqui

- uma pasta por módulo de negócio;
- arquivos de apoio para registrar módulos ativos, como `apiModules.ts` e `e2eModules.ts`;
- implementações reutilizáveis por domínio, como clients, helpers, builders e types.

## Padrões de organização

- um módulo só deve agrupar código do seu próprio domínio;
- se algo for usado por mais de um módulo, mova para `shared/`;
- use nomes simples e consistentes com os caminhos em `tests/`;
- cada novo módulo criado para testes deve ser listado em `apiModules.ts` e/ou `e2eModules.ts`.

## Estrutura sugerida por módulo

```bash
modules/
└── auth/
    ├── index.ts
    ├── login.ts
    ├── helpers/
    └── repository/
```

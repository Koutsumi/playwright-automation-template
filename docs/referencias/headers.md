# Headers

O arquivo `shared/headers.ts` centraliza os headers base usados pelos modulos de API.

## Estrutura atual

O template ja considera uma estrutura simples:

- `Content-Type: application/json`
- `origin` baseado em `BASE_API_URL`

## Objetivo

Evitar repeticao de headers em cada service ou client de API.

## Quando adaptar

Cada projeto pode complementar esse arquivo com:

- `Authorization`
- headers de tenant
- headers de idioma
- headers de versao da API

## Regra pratica

Se um header for comum a varias chamadas, ele deve nascer em `shared/headers.ts`.

Se ele existir apenas para um endpoint muito especifico, pode ser montado localmente no modulo.

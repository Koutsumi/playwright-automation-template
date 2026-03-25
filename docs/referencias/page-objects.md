# Page Objects

Os testes E2E do template devem seguir o padrao de `Page Object`.

## Regra principal

Cada pagina deve ter sua propria classe.

Exemplo:

```txt
pages/
└─ auth/
   └─ login.page.ts
```

## Locators

- se o locator se repete em mais de um metodo, ele deve virar propriedade da classe;
- se o locator for usado uma unica vez e fizer mais sentido localmente, ele pode ficar dentro do metodo.

## O que fica no Page Object

- seletores;
- acoes da pagina;
- validacoes de interface fortemente ligadas a essa pagina.

## O que nao fica no Page Object

- regra de negocio da API;
- massa de dados;
- preparacao de banco;
- asserts de alto nivel que pertencem ao objetivo do teste.

## Exemplo do template

O arquivo `pages/auth/login.page.ts` mostra a estrutura minima esperada para o fluxo de login.

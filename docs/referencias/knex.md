# SQL com Knex

Use esta abordagem quando o projeto trabalhar com banco relacional.

Na maioria dos projetos da empresa, o banco relacional será `SQL Server`. Por isso, este é o padrão recomendado nesta documentação.

## Dependências

Instale o `knex` e também o driver do banco utilizado.

Exemplo principal para SQL Server:

```bash
npm install knex mssql
```

Outros exemplos, caso o projeto use outro banco:

```bash
npm install knex mysql2
```

```bash
npm install knex pg
```

## Local da configuração

Crie os arquivos de conexão em `shared/database`.

Estrutura sugerida:

```bash
shared/
└── database/
    ├── knex.ts
    └── index.ts
```

## Exemplo de `shared/database/knex.ts`

```ts
import knex from 'knex';

export const knexClient = knex({
  client: process.env.DB_CLIENT || 'mssql',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 0,
    max: 10,
  },
});
```

## Exemplo de `shared/database/index.ts`

```ts
export * from './knex';
```

## Variáveis de ambiente

```env
DB_CLIENT=mssql
DB_HOST=localhost
DB_PORT=1433
DB_USER=sa
DB_PASSWORD=Your_password123
DB_NAME=playpattern
```

## Uso recomendado

- montar queries de apoio sem acoplamento ao banco específico;
- criar massa de teste;
- limpar registros com segurança;
- controlar transações em cenários mais sensíveis.

## Boas práticas

- centralize a instância do `knexClient`;
- feche conexão ao final da execução quando necessário;
- evite SQL solto espalhado por vários testes;
- prefira helpers nomeados por intenção de negócio.

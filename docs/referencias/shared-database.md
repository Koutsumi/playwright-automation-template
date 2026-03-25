# shared/database

`shared/database` é o ponto único de configuração de banco do template.

## Objetivo

Essa pasta existe para evitar:

- conexão espalhada em vários arquivos;
- duplicação de leitura de `.env`;
- acoplamento do banco a um módulo específico;
- troca difícil de tecnologia entre projetos.

## Estrutura sugerida

```bash
shared/
└── database/
    ├── index.ts
    ├── mongo.ts
    ├── knex.ts
    └── README.md
```

Nem todos os arquivos são obrigatórios. Crie apenas o que o projeto usar.

## Exemplo de responsabilidade

- `mongo.ts`: conexão e helpers para MongoDB
- `knex.ts`: instância do Knex e configuração SQL
- `index.ts`: exports públicos da camada de banco

## Consumo nos testes

Os testes e módulos devem importar de `shared/database`, nunca recriar conexão localmente.

Exemplo:

```ts
import { db } from '../../shared/database';
```

ou

```ts
import { mongoClient } from '../../shared/database/mongo';
import { knexClient } from '../../shared/database/knex';
```

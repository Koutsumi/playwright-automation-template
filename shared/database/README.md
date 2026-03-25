# shared/database

Esta pasta concentra toda a integração de banco de dados do projeto.

## Regra obrigatória do template

- se o projeto usa `MongoDB`, configure a conexão aqui com a biblioteca `mongodb`;
- se o projeto usa banco `SQL`, configure a conexão aqui com `knex` e o driver do banco;
- testes e módulos devem consumir esta camada, nunca abrir conexão própria;
- queries, helpers e repositórios compartilhados devem nascer a partir desta pasta.

## Estrutura sugerida

```bash
shared/
└── database/
    ├── index.ts
    ├── mongo.ts
    ├── knex.ts
    └── repositories/
```

Crie apenas os arquivos necessários para o banco adotado no projeto.

## Padrões

- concentre variáveis de ambiente de banco aqui;
- exponha funções pequenas e reutilizáveis;
- mantenha separação entre conexão, repositórios e operações auxiliares;
- documente qualquer dependência externa adicional em `docs/referencias`.

## O que evitar

- escrever query diretamente dentro de `.spec.ts`;
- duplicar configuração de conexão em módulos;
- misturar regras de negócio com detalhes de infraestrutura.

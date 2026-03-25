# MongoDB

Use esta abordagem quando o projeto trabalhar com MongoDB.

## Dependência

```bash
npm install mongodb
```

## Local da configuração

Crie os arquivos de conexão em `shared/database`.

Estrutura sugerida:

```bash
shared/
└── database/
    ├── mongo.ts
    └── index.ts
```

## Exemplo de `shared/database/mongo.ts`

```ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGO_URI as string;
const dbName = process.env.MONGO_DB_NAME as string;

let client: MongoClient | null = null;
let database: Db | null = null;

export async function getMongoDb() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    database = client.db(dbName);
  }

  return database as Db;
}

export async function closeMongoConnection() {
  if (client) {
    await client.close();
    client = null;
    database = null;
  }
}
```

## Exemplo de `shared/database/index.ts`

```ts
export * from './mongo';
```

## Variáveis de ambiente

```env
MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=playpattern
```

## Uso recomendado

- preparar massa de teste;
- limpar coleções antes ou depois dos cenários;
- validar persistência quando isso fizer parte do objetivo do teste.

## Boas práticas

- reutilize uma única conexão por execução;
- não deixe a criação do client dentro do corpo do teste;
- encapsule operações repetidas em helpers ou repositories;
- evite assertions excessivamente acopladas ao formato interno do banco.

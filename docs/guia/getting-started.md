# Getting Started

Este template foi pensado para iniciar rapidamente um projeto de automação com Playwright, mantendo um padrão comum para testes de API e E2E.

## Dependências principais

- `@playwright/test` para execução dos testes
- `typescript` para tipagem do projeto
- `dotenv` para variáveis de ambiente
- `vitepress` para documentação

Dependências de banco devem ser adicionadas conforme a necessidade do projeto:

- MongoDB: `mongodb`
- SQL: `knex` e o driver do banco usado no projeto (`pg`, `mysql2`, `mssql`, `oracledb`, etc.)

## Instalação

```bash
npm install
```

Depois instale os navegadores do Playwright:

```bash
npx playwright install
```

## Execução da documentação

```bash
npm run docs:dev
```

## Execução dos testes

Rodar tudo:

```bash
npx playwright test
```

Rodar somente API:

```bash
npx playwright test tests/api
```

Rodar somente E2E:

```bash
npx playwright test tests/e2e
```

## Atualização de dependências

As dependências deste template não precisam ficar congeladas na versão em que a documentação foi escrita.

Para atualizar apenas dentro da faixa já permitida no `package.json`:

```bash
npm update
```

Para revisar o projeto com versões mais novas e atualizar o `package.json`:

```bash
npx npm-check-updates -u && npm install
```

Sugestão de uso:

- `npm update` para rotina de manutenção;
- `npx npm-check-updates -u && npm install` para revisão mais ampla do template.

## Variáveis de ambiente

Cada projeto deve manter seu próprio `.env` com as variáveis necessárias para:

- URLs base;
- credenciais;
- tokens;
- dados de integração;
- conexão com banco, quando houver.

As variáveis de banco devem ser consumidas pelos arquivos dentro de `shared/database`.

No estado atual do template, as variáveis mais relevantes são:

- `BASE_API_URL`
- `BASE_E2E_URL`
- `E2E_USER_EMAIL`
- `E2E_USER_PASSWORD`
- `E2E_USER_NAME`
- `DB_URI`
- `DB_NAME`

## Convenção inicial

Ao criar um novo projeto a partir deste template:

1. defina os módulos em `modules/apiModules.ts` e `modules/e2eModules.ts`;
2. adicione os testes em `tests/api` e `tests/e2e`;
3. crie o setup de autenticação do módulo em `tests/<camada>/<modulo>/<modulo>.setup.ts` ou no `auth.setup.ts` correspondente;
4. mantenha dados reutilizáveis em `fixtures/`;
5. crie `Page Objects` em `pages/` para os cenários E2E;
6. crie utilitários compartilhados em `shared/`;
7. se houver integração com banco, concentre a configuração em `shared/database`.

## Fluxo recomendado para começar

1. copie o repositório;
2. ajuste `.env.example` e crie o `.env`;
3. registre o módulo nas listas de `modules/`;
4. configure o `auth.setup.ts` com a lógica real de limpeza, criação de usuário e login;
5. adapte `fixtures/users.ts` aos perfis reais do sistema;
6. implemente os endpoints reais em `modules/<modulo>/`;
7. adapte seletores e páginas em `pages/`.

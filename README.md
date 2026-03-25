# PlayPattern

Template de automação com `Playwright` para projetos de QA, com padrão único de estrutura, organização, nomenclatura e documentação.

Este repositório deve ser copiado pelo time para iniciar novas automações seguindo a mesma base arquitetural. O objetivo não é entregar uma automação fechada, e sim uma fundação consistente para API e E2E.

## Objetivo do template

- padronizar a criação de projetos de automação;
- reduzir divergência entre repositórios;
- facilitar onboarding de novos QAs;
- deixar claro onde cada tipo de código deve ficar;
- manter exemplos mínimos de estrutura, setup e escrita de testes.

## O que este projeto já demonstra

- separação entre `tests/api` e `tests/e2e`;
- organização por módulo, usando `auth` como referência;
- `fixtures` centralizados;
- `Page Object` com uma classe por página;
- setup de autenticação com comentários baseados no fluxo do `padrao`;
- padrão de escrita de testes com `Arrange`, `Act` e `Assert`;
- documentação em `VitePress` para onboarding e referência.

## Como começar

1. copie este repositório para a sua máquina;
2. rode `npm install`;
3. rode `npx playwright install`;
4. crie o `.env` a partir de `.env.example`;
5. ajuste os módulos em `modules/apiModules.ts` e `modules/e2eModules.ts`;
6. adapte `fixtures`, `setup`, `modules` e `pages` para o sistema real;
7. consulte os `README.md` das pastas antes de implementar.

## Estrutura principal

```txt
.
├─ docs/                # Documentação do template em VitePress
├─ fixtures/            # Massa de dados reutilizável
├─ modules/             # Lógica por domínio de negócio
├─ pages/               # Page Objects para E2E
├─ shared/              # Utilitários compartilhados
├─ tests/
│  ├─ api/              # Testes de API
│  └─ e2e/              # Testes E2E
├─ playwright.config.ts # Configuração central do Playwright
└─ .env.example         # Variáveis de ambiente esperadas
```

## Convenções do projeto

### Testes

- `success.spec.ts` para cenários positivos;
- `errors.spec.ts` para cenários negativos;
- `*.setup.ts` para preparação de contexto, dados e autenticação;
- testes devem seguir a lógica `Arrange`, `Act`, `Assert`.

### Módulos

- cada módulo representa um domínio funcional;
- o nome do módulo deve ser consistente em `modules/`, `tests/` e listas de configuração;
- regras específicas de domínio ficam no módulo;
- o que for compartilhado entre domínios deve ir para `shared/`.

### Page Objects

- uma classe por página;
- locator repetido deve virar propriedade da classe;
- locator pontual pode ficar dentro do método;
- o teste não deve concentrar seletores diretamente.

### Banco de dados

- qualquer integração com banco deve nascer em `shared/database`;
- o `auth.setup.ts` pode limpar, recriar usuários e preparar sessão;
- a implementação real depende do banco adotado pelo projeto, mas a responsabilidade arquitetural já está definida no template.

## Configuração atual do Playwright

O `playwright.config.ts` já está preparado para:

- executar setups globais;
- separar execução por módulos de API;
- separar execução por módulos E2E;
- permitir dependências entre setup e suíte principal.

Hoje o template usa:

- `modules/apiModules.ts`
- `modules/e2eModules.ts`

para registrar os módulos ativos.

## Variáveis de ambiente esperadas

O `.env.example` já sugere variáveis iniciais como:

- `BASE_API_URL`
- `BASE_E2E_URL`
- `E2E_USER_EMAIL`
- `E2E_USER_PASSWORD`
- `E2E_USER_NAME`
- `DB_URI`
- `DB_NAME`

Cada projeto pode expandir essa lista conforme necessidade.

## Atualização de dependências

Este template não deve ficar preso às versões da documentação. Sempre que fizer sentido, atualize as dependências do projeto.

Para uma atualização simples, respeitando a faixa já definida no `package.json`:

```bash
npm update
```

Para uma atualização mais ampla, trazendo versões mais recentes e atualizando o `package.json`:

```bash
npx npm-check-updates -u && npm install
```

Recomendação prática:

- use `npm update` na manutenção do dia a dia;
- use `npx npm-check-updates -u && npm install` quando quiser revisar o template com mais profundidade.

## Documentação

Além deste README, o projeto possui documentação navegável em `docs/`.

Para subir a documentação localmente:

```bash
npm run docs:dev
```

Para gerar o build:

```bash
npm run docs:build
```

## Como usar a pasta `padrao`

A pasta `padrao/` existe como referência comparativa. Ela ajuda a entender decisões de naming, setup, fixtures e organização que inspiraram este template.

Mesmo assim, o repositório que deve ser seguido pelo QA no dia a dia é este aqui, com a estrutura atual, os `README.md` por pasta e a documentação em `docs/`.

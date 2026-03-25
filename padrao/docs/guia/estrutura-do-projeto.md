# 🧱 Estrutura do Projeto

Abaixo está a estrutura base do projeto de testes automatizados com Playwright, organizada de forma modular para facilitar manutenção, escalabilidade e reutilização de componentes.

```bash
.
├── .auth/                 # Armazena cookies e tokens gerados durante a autenticação
├── config/                # Configurações globais e utilitários do ambiente
├── coverage/              # Relatórios de cobertura (gerados automaticamente)
├── docs/                  # Documentação técnica do projeto (gerada com VitePress)
├── fixtures/              # Dados fixos e mocks reutilizáveis

├── modules/               # Módulos funcionais (cada um representa uma área da aplicação)
│   └── auth/              # Módulo de autenticação
│       ├── create.ts      # Função que executa a rota de cadastro de usuário
│       ├── login.ts       # Função que executa a rota de login/autenticação
│       ├── index.ts       # Agrega e exporta todas as funções do módulo
│       ├── helpers/       # Funções auxiliares específicas do módulo (ex: geração de payloads, validações)
│       └── repository/    # Tipagens e contratos das rotas do módulo
│           ├── auth.types.ts  # Tipagens (request/response) da rota de autenticação
│           └── user.types.ts  # Tipagens (request/response) da rota de usuário

├── node_modules/          # Dependências do projeto
├── pages/                 # Page Objects (usado futuramente nos testes E2E)
├── playwright-report/     # Relatórios HTML gerados pelo Playwright

├── shared/                # Recursos globais e reutilizáveis
│   ├── helpers/           # Funções auxiliares genéricas (ex: manipulação de headers)
│   │   └── headers.ts     # Função para montagem de headers globais
│   └── ...                # Tipagens e variáveis de uso geral

├── test-results/          # Resultados brutos das execuções de teste

├── tests/                 # Diretório principal dos testes automatizados
│   ├── api/               # Testes de API (REST/GraphQL)
│   ├── e2e/               # Testes end-to-end (a serem implementados)
│   └── auth.setup.ts      # Script de autenticação inicial (gera cookies/tokens)

├── .env                   # Variáveis de ambiente locais (não versionadas)
├── .env.example           # Exemplo de configuração de ambiente
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── package.json           # Dependências e scripts do projeto
├── package-lock.json      # Controle de versões das dependências
└── playwright.config.ts   # Configuração principal do Playwright
```

## 🗂️ Descrição Geral
| Diretório / Arquivo     | Descrição                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `.auth/`                | Contém cookies e tokens gerados automaticamente pelos testes de autenticação.          |
| `config/`               | Centraliza as configurações globais do ambiente e utilitários de setup.                |
| `coverage/`             | Armazena relatórios de cobertura de testes (gerados via Playwright).                   |
| `docs/`                 | Contém a documentação técnica do projeto, escrita com **VitePress**.                   |
| `fixtures/`             | Contém dados fixos, mocks e payloads reutilizáveis em testes.                          |
| `modules/`              | Divide as funcionalidades da API em módulos independentes (como `auth`, `user`, etc.). |
| `shared/`               | Guarda funções auxiliares e recursos genéricos utilizados em todo o projeto.           |
| `tests/`                | Reúne todos os testes automatizados (API, E2E, etc.).                                  |
| `pages/`                | Estrutura base para Page Objects (voltada a testes E2E).                               |
| `playwright-report/`    | Relatórios HTML das execuções de teste.                                                |
| `test-results/`         | Resultados brutos (logs, JSONs, etc.) das execuções de teste.                          |
| `.env` / `.env.example` | Configuração de variáveis de ambiente.                                                 |
| `playwright.config.ts`  | Arquivo principal de configuração do Playwright.                                       |

# Estrutura do Projeto

Esta é a organização esperada para projetos que seguirem o template.

```bash
.
├── docs/                     # Documentação do template e do projeto
├── fixtures/                 # Massa fixa, payloads e dados reutilizáveis
├── modules/
│   ├── apiModules.ts         # Lista dos módulos com testes de API
│   ├── e2eModules.ts         # Lista dos módulos com testes E2E
│   └── <modulo>/             # Implementações e helpers por domínio
├── pages/                    # Page Objects e componentes de interação para E2E
├── shared/
│   └── database/             # Configuração e clients de banco de dados
├── tests/
│   ├── api/                  # Testes de API organizados por módulo
│   ├── e2e/                  # Testes E2E organizados por módulo
│   └── auth.setup.ts         # Setup global, quando o projeto usar autenticação inicial
├── playwright.config.ts      # Configuração central do Playwright
└── package.json              # Scripts e dependências do projeto
```

## Organização por módulo

O `playwright.config.ts` já está preparado para trabalhar com a ideia de módulos. A lista declarada em:

- `modules/apiModules.ts`
- `modules/e2eModules.ts`

controla os projetos de execução para `setup` e testes principais.

Isso ajuda a:

- executar suítes isoladas por contexto;
- reaproveitar setup por módulo;
- manter crescimento ordenado do repositório.

## Responsabilidade de cada pasta

### `modules/`

Concentra regras, clients, builders, payloads e helpers específicos de um domínio, como `login`, `orders` ou `users`.

### `tests/`

Contém os arquivos `.setup.ts` e `.spec.ts`, separados entre API e E2E.

### `pages/`

Guarda `Page Objects` e abstrações de interface para cenários E2E.

Regra do template:

- uma classe por página;
- locators reutilizados devem virar propriedades da classe;
- locators pontuais podem ficar dentro do método correspondente.

### `fixtures/`

Armazena massa de apoio. Prefira dados pequenos, previsíveis e fáceis de limpar.

O arquivo `fixtures/users.ts` segue o mesmo espírito do projeto `padrao`:

- perfis fixos como `admin()`;
- geradores como `user(...)` para cenários dinâmicos.

### `shared/`

Reserva para utilitários reutilizáveis entre módulos. Tudo o que não pertence a um domínio específico deve ficar aqui.

### `shared/database/`

É a pasta padrão para configuração de banco. Independentemente do projeto usar MongoDB, PostgreSQL, MySQL ou outro banco SQL, a conexão deve nascer aqui.

Mesmo quando o código estiver apenas comentado como blueprint, a responsabilidade arquitetural continua sendo desta pasta.

## Resultado esperado

O template deve permitir que qualquer pessoa do time encontre rapidamente:

- onde criar um novo módulo;
- onde colocar um teste;
- onde configurar autenticação;
- onde ficam integrações compartilhadas;
- onde ajustar o banco do projeto.

# 🔐 auth.setup

Script responsável por configurar o ambiente de autenticação nos testes Playwright apenas para o usuário administrador, gerando e armazenando um storageState (cookies de sessão + storage) válido somente do ADMIN antes da execução das suítes que dependem de login administrativo.

Ele é utilizado como setup global para preparar o estado de autenticação do ADMIN e evitar repetição de lógica de login desse perfil nas suítes.

### 📂 Localização

`tests/setup/auth.setup.ts`

## 📦 Dependências
| Tipo                  | Nome                       | Descrição                                                                                                  |
| --------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ⚙️ Framework de teste | **@playwright/test**       | Fornece o ambiente de teste (`test`, `expect`, `request`) e permite criar contextos isolados de navegação. |
| 🧩 Módulo interno     | **AuthServices**           | Camada de serviço responsável por autenticação — encapsula a lógica de login via API.                      |
| 📁 Fixture            | **usersFixture**           | Fornece usuários de teste (admin, padrão, etc.) com dados estáticos e consistentes.                        |                                            |
| 🗄️ Banco de dados    | **MongoActions**           | Usada para limpar registros existentes e evitar duplicações durante o setup.                               |


## 🧩 Fluxo de execução
1. **Limpeza inicial:**
Antes de todos os testes (beforeAll), os usuários são removidos da coleção users para evitar duplicidades.

2. **Criação e login dos usuário**
O helper loginAndStoreSession() é executado, inserindo um novo usuário no banco e simulando uma autenticação real via endpoint de login.

2.1. **Validação da resposta:**
- O status code retornado é 200.

- O corpo contém { STATUS: "SUCCESS", MESSAGE: "Success! You are logged in." }.

2.2. **Persistência dos cookies:**
Caso o login seja bem-sucedido, o estado de sessão (cookies, storage, headers, etc.) é salvo em
`./.auth/cookies.admin.json` — permitindo reutilizar a sessão em outros testes.

2.3. **Encerramento do contexto:**
O contexto HTTP do Playwright (request.newContext()) é fechado após o término do setup.

## 🧾 Observações

O arquivo não executa testes de autenticação em si, apenas prepara o ambiente para eles.

O arquivo `.auth/cookies.admin.json` serve como estado de sessão persistido, e pode ser referenciado em outros testes via:

```js
test.use({ storageState: './.auth/cookies.admin.json' });
```

## 🧭 Boas práticas

::: tip 💡 Recomendações

- Utilize auth.setup.ts como dependência global no playwright.config.ts, dentro da propriedade globalSetup.

- Mantenha usuários de teste em fixtures centralizados (/fixtures/users.ts) para padronizar dados.

- Garanta que a base de dados usada para testes seja isolada (ex: mongo_test) para evitar conflitos com o ambiente real.

- Ignore a pasta .auth/ no controle de versão (.gitignore), pois ela contém dados sensíveis de sessão.
:::
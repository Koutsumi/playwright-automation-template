# 🔐 loginAndStoreSession()

Realiza o login de um usuário via API e salva o estado de autenticação (**cookies**, **localStorage**, **headers**) em disco, permitindo reutilização da sessão em testes Playwright.

Essa função é utilizada em setups de teste para simular sessões autenticadas de forma **programática**, **isolada** e **reaproveitável**.


### 📂 Localização
`modules/auth/helpers/loginAndStoreSession.ts`


## 📦 Dependências

### Tipo | Nome | Descrição
| Tipo | Nome | Descrição |
|------|------|-----------|
| ⚙️ Framework de teste | `@playwright/test` | Utiliza `APIRequest`, `expect` e `storageState()` para manipular um contexto HTTP isolado. |
| 🧱 Tipagem | `IUserData` | Define a estrutura dos dados do usuário (e-mail, senha etc.). |
| 🧩 Serviço interno | `AuthServices.login()` | Realiza autenticação via endpoint de login. |
| 🧩 Helper interno | `insertUser()` | Insere o usuário no banco de teste antes do login, garantindo dados válidos e senha criptografada. |
| 📚 Pacote externo | `fs` (Node.js) | Salva o estado da sessão (`storageState`) em arquivo JSON. |
| 🧩 Helper interno | `saveUserId()` | Persiste userId, email e path da sessão em `.auth/usersIdList.json`. |


## 🧩 Parâmetros

| Nome | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `request` | `APIRequest` | — | Instância do Playwright usada para criar um contexto HTTP isolado. |
| `user` | `IUserData` | — | Dados do usuário que será autenticado (ex.: `email`, `password`). |
| `cookiesPath` | `string` | — | Caminho do arquivo onde o estado da sessão será salvo (`.auth/*.json`). |


## 🔁 Retorno

| Tipo | Descrição |
|------|-----------|
| `Promise<boolean>` | Retorna `true` se o login for bem-sucedido e o estado for salvo; `false` caso contrário. |


## 🧾 Observações importantes

- Cria um contexto HTTP isolado com `request.newContext()` para evitar vazamento de sessão entre testes.
- Insere o usuário no banco via `insertUser()` — a senha deve estar **criptografada** previamente.
- O estado da sessão é salvo em disco com `fs.writeFileSync(cookiesPath, ...)`.

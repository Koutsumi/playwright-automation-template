# 👤 insertUser()

Insere um usuário de teste no banco MongoDB, realizando automaticamente o hash da senha e definindo campos padrão necessários para a aplicação.

Essa função é útil para preparar dados de ambiente de teste, principalmente em cenários que envolvem autenticação e permissões.

### 📂 Localização

`shared/helpers/insertUser.ts`

## 📦 Dependências
| Tipo                  | Nome                          | Descrição                                                             |
| --------------------- | ----------------------------- | --------------------------------------------------------------------- |
| 📚 Pacote externo     | **bcryptjs**                  | Utilizado para gerar o hash da senha do usuário.                      |
| 🧩 Classe interna     | **MongoActions**              | Responsável por executar a inserção (`insertOne`) no banco MongoDB.   |
| 🧱 Tipagem            | **IUserData**, **IInsertUser** | Interfaces usadas para padronizar os dados de entrada e persistência. |
| 🔗 Função relacionada | **encryptPassword()**         | Usada para abstrair a lógica de criptografia.     |


## ⚙️ Funcionamento

- Recebe um objeto user no formato IUserData.
- Criptografa a senha usando bcrypt (ou a função `encryptPassword()`).
- Monta o objeto `IIsertUser` com campos padrão (nome, e-mail, role, data de criação etc.).
- Executa `insertOne()` via MongoActions.
- Retorna `true` em caso de sucesso ou lança erro em caso de falha.

### 🧩 Parâmetros
| Nome     | Tipo        | Padrão | Descrição                                                                               |
| -------- | ----------- | ------ | --------------------------------------------------------------------------------------- |
| **user** | `IUserData` | —      | Objeto contendo os dados básicos do usuário a ser inserido (nome, e-mail, senha, role). |

### 🔁 Retorno
| Tipo               | Descrição                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Retorna `true` se o usuário for inserido com sucesso. Caso contrário, lança uma exceção. |


## 🧾 Observações

- Utiliza o pacote bcryptjs para hashing de senhas.
- A função `MongoActions` é definida em `config/libs/db/mongoActions.ts`.
- Deve ser usada apenas em ambiente de desenvolvimento ou testes automatizados.
- Em caso de erro, o log é impresso no console com o prefixo "Error inserting user:".

## 🧭 Boas práticas

::: tip 💡 Recomendações

- Use esta função em scripts de setup ou fixtures de autenticação.

- Garanta que o banco MongoDB esteja em um ambiente isolado de produção.
:::
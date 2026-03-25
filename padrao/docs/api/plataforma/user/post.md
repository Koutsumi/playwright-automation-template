# POST `user/register`

Endpoint responsável por registrar um novo usuário na plataforma.

Recebe os dados básicos (nome, e-mail e senha) e cria o registro correspondente no banco de dados.

### 📍 Endpoint
```shell
POST /user/register
```
## ➡️ Request Body
| Campo      | Tipo     | Obrigatório | Descrição                                                        |
| ---------- | -------- | ----------- | ---------------------------------------------------------------- |
| `name`     | `string` | ✅           | Nome completo do usuário a ser cadastrado.                       |
| `email`    | `string` | ✅           | E-mail que será utilizado para login. Deve ser único no sistema. |
| `password` | `string` | ✅           | Senha em texto puro (será criptografada internamente).           |

### 🧩 Exemplo de requisição
```json
{
  "name": "Teste postman",
  "email": "postman2@bnpsolucoes.com.br",
  "password": "123123123"
}

```
## ⬅️ Response
Retorna o status da criação do usuário e as informações do registro recém-criado.

| Campo     | Tipo     | Descrição                                                        |
| --------- | -------- | ---------------------------------------------------------------- |
| `STATUS`  | `string` | Indica o resultado da operação (`"CREATED"` em caso de sucesso). |
| `MESSAGE` | `string` | Mensagem descritiva sobre o resultado da requisição.             |
| `DATA`    | `object` | Dados do usuário criado.                                         |

### 🧱 Estrutura de DATA
| Campo                              | Tipo             | Descrição                                                            |
| ---------------------------------- | ---------------- | -------------------------------------------------------------------- |
| `profileImageURL`                  | `string \| null` | URL da imagem de perfil, se houver.                                  |
| `provider`                         | `string`         | Indica o provedor de autenticação (ex: `"local"`, `"google"`).       |
| `roles`                            | `string[]`       | Lista de papéis atribuídos ao usuário (vazia por padrão).            |
| `isMailChecked`                    | `boolean`        | Indica se o e-mail foi verificado.                                   |
| `_id`                              | `string`         | ID único do usuário no banco.                                        |
| `firstName`                        | `string`         | Primeiro nome do usuário (extraído automaticamente do campo `name`). |
| `lastName`                         | `string`         | Sobrenome do usuário.                                                |
| `email`                            | `string`         | E-mail do usuário cadastrado.                                        |
| `annualCheckProponents.wasChecked` | `boolean`        | Indica se o check anual do proponente foi executado.                 |
| `annualCheckProponents.date`       | `Date`           | Data em que a verificação foi registrada.                            |
| `creationDate`                     | `Date`           | Data de criação do usuário.                                          |
| `createdAt`                        | `Date`           | Timestamp de criação do documento.                                   |
| `updatedAt`                        | `Date`           | Timestamp da última atualização.                                     |

### 🧩 Exemplo de requisição

```json
{
  "STATUS": "CREATED",
  "MESSAGE": "User created successfully",
  "DATA": {
    "profileImageURL": null,
    "provider": "local",
    "roles": [],
    "isMailChecked": false,
    "_id": "690e48cffbf00208201f30eb",
    "firstName": "Teste",
    "lastName": "postman",
    "email": "postman2@bnpsolucoes.com.br",
    "annualCheckProponents": {
      "wasChecked": true,
      "date": "2025-11-07T19:30:23.026Z"
    },
    "creationDate": "2025-11-07T19:30:23.062Z",
    "createdAt": "2025-11-07T19:30:23.063Z",
    "updatedAt": "2025-11-07T19:30:23.063Z"
  }
}

```

Bad request

```json
{
    "STATUS": "FAILURE",
    "MESSAGE": "An user with the specified e-mail already exists.",
    "PTMESSAGE": "Já existe um usuário com o e-mail especificado."
}
```
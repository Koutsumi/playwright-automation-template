# POST `/auth/login`

Endpoint responsável por autenticar o usuário no sistema.
Recebe as credenciais (e-mail e senha) e retorna as informações do usuário autenticado, juntamente com dados auxiliares de perfil e status de verificação.

### 📍 Endpoint
```shell
POST /auth/login
```

## ➡️ Request Body
| Campo      | Tipo     | Obrigatório | Descrição                                         |
| ---------- | -------- | ----------- | ------------------------------------------------- |
| `email`    | `string` | ✅           | E-mail cadastrado do usuário.                     |
| `password` | `string` | ✅           | Senha em texto puro (criptografada internamente). |

### 🧩 Exemplo de requisição
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```

## ⬅️ Response
Retorna o status da autenticação e, em caso de sucesso, os dados completos do usuário autenticado.

| Campo     | Tipo     | Descrição                                                      |
| --------- | -------- | -------------------------------------------------------------- |
| `STATUS`  | `string` | Indica o resultado da operação. Ex.: `"SUCCESS"` ou `"FAILURE"`. |
| `MESSAGE` | `string` | Mensagem descritiva sobre o resultado.                         |
| `DATA`    | `object` | Contém as informações do usuário autenticado.                  |

### 🧱 Estrutura de DATA
| Campo                              | Tipo             | Descrição                                                        |
| ---------------------------------- | ---------------- | ---------------------------------------------------------------- |
| `annualCheckProponents.wasChecked` | `boolean`        | Indica se o check anual do proponente foi realizado.             |
| `annualCheckProponents.date`       | `Date`           | Data da última verificação anual.                                |
| `profileImageURL`                  | `string \| null` | URL da imagem de perfil, se existir.                             |
| `provider`                         | `string`         | Indica o provedor de autenticação (ex: `"local"`, `"google"`).   |
| `roles`                            | `string[]`       | Lista de papéis atribuídos ao usuário (ex: `["ADMIN", "USER"]`). |
| `isMailChecked`                    | `boolean`        | Informa se o e-mail foi verificado.                              |
| `_id`                              | `string`         | ID único do usuário no banco.                                    |
| `firstName`                        | `string`         | Primeiro nome.                                                   |
| `lastName`                         | `string`         | Sobrenome.                                                       |
| `email`                            | `string`         | E-mail do usuário.                                               |
| `creationDate`                     | `Date`           | Data de criação do registro.                                     |
| `defaultProponent`                 | `string`         | ID do proponente padrão associado.                               |
| `updatedAt`                        | `Date`           | Data da última atualização do registro.                          |

### 🧩 Exemplo de requisição

```json
{
  "STATUS": "SUCCESS",
  "MESSAGE": "Success! You are logged in.",
  "DATA": {
    "annualCheckProponents": {
      "wasChecked": true,
      "date": "2024-12-01T12:00:00.000Z"
    },
    "profileImageURL": null,
    "provider": "local",
    "roles": ["admin"],
    "isMailChecked": true,
    "_id": "66b1a8e49fcd9d233b2c1a45",
    "firstName": "Alice",
    "lastName": "Doe",
    "email": "alice@example.com",
    "creationDate": "2024-05-10T14:22:13.000Z",
    "defaultProponent": "66b1a8e49fcd9d233b2c1a45",
    "updatedAt": "2024-12-01T12:10:00.000Z"
  }
}
```
Bad request
```json
{
    "STATUS": "FAILURE",
    "MESSAGE": "Invalid username or password"
}
```
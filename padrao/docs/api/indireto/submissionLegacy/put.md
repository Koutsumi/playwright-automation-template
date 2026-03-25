# PUT `submission/legacy`

Endpoint responsável por atualizar uma submissão legada no sistema.
Pode ser utilizado para três operações distintas:

- 🧱 Atualização de informações da submissão (dados básicos, número, nome, etc.)
- 👤 Seleção de proponente vinculado à submissão
- 🚀 Envio do projeto para análise da administração

### 📍 Endpoint
```shell
PUT /submission/legacy
```

## ➡️ Request Body

🔹 **1. Atualização de informações da submissão**

| Campo               | Tipo     | Obrigatório | Descrição                                                                                                                                                     |
| ------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `submissionId`      | `string` | ✅           | ID único da submissão que será atualizada.                                                                                                                    |
| `submissionNumber`  | `number` | ❌           | Número do projeto. Deve ser **único** e **não estar sendo utilizado** por outra submissão. O valor deve estar **entre 1 e 35000** ou **entre 90000 e 91000**. |
| `submissionName`    | `string` | ❌           | Nome da submissão. Pode ser `null` se ainda não definido.                                                                                                     |
| `submissionEndDate` | `Date`   | ❌           | Data de encerramento da submissão. Pode ser `null`.                                                                                                           |
| `projectValueProac` | `number` | ❌           | Valor de projeto associado ao ProAC. Pode ser `null` se não informado.                                                                                        |


### 🧩 Exemplo de requisição
```json
{
  "submissionId": "6911cf0baf0d110830fb885a",
  "submissionNumber": "",
  "submissionName": null,
  "submissionEndDate": null,
  "projectValueProac": null
}
```

🔹 **2. Seleção de proponente**
Permite vincular ou atualizar o proponente responsável por uma submissão legada.


### 🧩 Exemplo de requisição (seleção de proponente)
```json
{
  "submissionId": "6911cf0baf0d110830fb885a",
  "proponentId": "618ac89d0dfab7001c04cbcc"
}

```

**🔹 3. Envio do projeto para análise da administração**
Permite enviar o projeto para avaliação pela equipe administrativa.
| Campo          | Tipo     | Obrigatório | Descrição                                                            |
| -------------- | -------- | ----------- | -------------------------------------------------------------------- |
| `submissionId` | `string` | ✅           | ID único da submissão a ser enviada.                                 |
| `ruleId`       | `string` | ✅           | ID da regra de porte do projeto (ex: pequeno, médio, grande).        |
| `status`       | `string` | ✅           | Deve ser `"SEND"`. Indica que a submissão será enviada para análise. |

### 🧩 Exemplo de requisição
```json
{
  "submissionId": "6911cf0baf0d110830fb885a",
  "ruleId": "687956682ab3236e4aa80d49",
  "status": "SEND"
}

```

## ⬅️ Response
Retorna o status da operação e os dados atualizados da submissão.
| Campo     | Tipo     | Descrição                                                        |
| --------- | -------- | ---------------------------------------------------------------- |
| `STATUS`  | `string` | Indica o resultado da operação (`"SUCCESS"` em caso de sucesso). |
| `MESSAGE` | `string` | Mensagem descritiva sobre o resultado da requisição.             |
| `DATA`    | `object` | Objeto contendo os dados completos da submissão atualizada.      |

### 🧱 Estrutura de DATA.submission
| Campo                                                         | Tipo                | Descrição                                                         |
| ------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------- |
| `notice`                                                      | `object`            | Informações do edital associado.                                  |
| `notice.presentation`                                         | `object`            | Dados de apresentação do edital (`noticeNumber`, `title`).        |
| `lastEvent`                                                   | `object`            | Último evento registrado (`date`, `status`).                      |
| `proponent`                                                   | `string`            | ID do proponente associado (presente após seleção de proponente). |
| `proponentCopy` / `cooperatedCopy` / `governmentEmployeeCopy` | `object`            | Dados de contato e usuários vinculados.                           |
| `sections`                                                    | `array`             | Seções e módulos associados à submissão.                          |
| `isLegacy`                                                    | `boolean`           | Indica se a submissão é do tipo legado.                           |
| `year`                                                        | `number`            | Ano da submissão.                                                 |
| `termOfParticipationWasAccepted`                              | `boolean`           | Indica se o termo de participação foi aceito.                     |
| `status`                                                      | `string`            | Status atual da submissão (`"DRAFT"`, `"SENT"`, etc.).            |
| `submissionNumber`                                            | `string` | `number` | Número do projeto.                                                |
| `projectValueProac` / `projectValueTotal`                     | `number`            | Valores financeiros associados à submissão.                       |
| `createdAt`, `updatedAt`                                      | `Date`              | Datas de criação e atualização.                                   |
| `_id`                                                         | `string`            | Identificador único da submissão.                                 |
| `name`                                                        | `string`            | Nome do projeto.                                                  |


### 🧩 Exemplo de resposta
```json
{
  "STATUS": "SUCCESS",
  "MESSAGE": "Successfully updated the legacy submission",
  "DATA": {
    "submission": {
      "notice": {
        "presentation": {
          "noticeNumber": "ICMS",
          "title": "Proac ICMS"
        },
        "_id": "62561852f50b9b001b416456",
        "program": "Proac ICMS"
      },
      "lastEvent": {
        "date": "2025-11-10T11:39:56.639Z",
        "status": "DRAFT"
      },
      "proponentCopy": {
        "contactDetails": { "isMailChecked": false },
        "users": []
      },
      "cooperatedCopy": {
        "contactDetails": { "isMailChecked": false },
        "users": []
      },
      "governmentEmployeeCopy": {
        "contactDetails": { "isMailChecked": false },
        "users": []
      },
      "icms": { "submissionsRelated": [] },
      "_id": "6911cf0baf0d110830fb885a",
      "status": "DRAFT",
      "user": "65df76b0087695005eb05f58",
      "submissionNumber": "90893",
      "sections": [
        {
          "noticeSection": { "modules": [] },
          "_id": "6911cf0baf0d110830fb885b",
          "formType": "ICMS",
          "status": "NOTSTARTED",
          "updatedAt": "2025-11-10T11:39:55.798Z",
          "createdAt": "2025-11-10T11:39:55.798Z",
          "expectedEnd": "2025-11-30T11:49:29.526Z",
          "projectValueProac": 256000,
          "projectValueTotal": 256000
        }
      ],
      "isLegacy": true,
      "year": 2025,
      "termOfParticipationWasAccepted": true,
      "createdAt": "2025-11-10T11:39:55.807Z",
      "updatedAt": "2025-11-10T12:56:22.966Z",
      "name": "Teste de sistema",
      "proponent": "618ac89d0dfab7001c04cbcc"
    }
  }
}

```

### ❌ Exemplo de erro (Bad Request)
```json
{
  "STATUS": "FAILURE",
  "MESSAGE": "The provided submission number is already in use or out of allowed range.",
  "PTMESSAGE": "O número do projeto deve estar entre 1 e 35000 ou entre 90000 e 91000, e não pode estar sendo utilizado."
}
```

## ⚠️ Validações Importantes

- `submissionId` é sempre obrigatório.
- `submissionNumber` deve estar entre 1–35000 ou 90000–91000, e não pode estar sendo utilizado.
- O `proponentId` só deve ser enviado quando o objetivo for vincular um proponente.
- Para envio do projeto (status: "SEND"):
  - O campo `ruleId` define o porte do projeto (pequeno, médio ou grande).
  - O status da submissão passa a ser `"SUBMITTED"`.
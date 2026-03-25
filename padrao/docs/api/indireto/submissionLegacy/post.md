# POST `submission/legacy`
Endpoint responsável por criar uma novo projeto legado associada a um edital (notice).
Ao criar a submissão, o sistema gera uma estrutura inicial de dados com status `"DRAFT"` e preenche automaticamente as informações básicas do edital.

### 📍 Endpoint
```shell
POST /submission/legacy
```

## ➡️ Request Body
| Campo      | Tipo     | Obrigatório | Descrição                                                  |
| ---------- | -------- | ----------- | ---------------------------------------------------------- |
| `noticeId` | `string` | ✅           | ID do edital (**notice**) no qual a submissão será criada. |

### 🧩 Exemplo de requisição
```json
{
  "noticeId": "62561852f50b9b001b416456"
}
```

## ⬅️ Response
Retorna os dados completos da submissão recém-criada.
| Campo     | Tipo     | Descrição                                                        |
| --------- | -------- | ---------------------------------------------------------------- |
| `STATUS`  | `string` | Indica o resultado da operação (`"SUCCESS"` em caso de sucesso). |
| `MESSAGE` | `string` | Mensagem descritiva sobre o resultado da requisição.             |
| `DATA`    | `object` | Contém os dados da submissão criada.                             |

### 🧱 Estrutura de DATA
| Campo                                                         | Tipo      | Descrição                                                                   |
| ------------------------------------------------------------- | --------- | --------------------------------------------------------------------------- |
| `notice`                                                      | `object`  | Informações do edital associado (`noticeNumber`, `title`, `program`).       |
| `proponentCopy` / `cooperatedCopy` / `governmentEmployeeCopy` | `object`  | Estruturas vazias iniciais com detalhes de contato e usuários relacionados. |
| `icms.submissionsRelated`                                     | `array`   | Submissões relacionadas ao ICMS (vazio no momento da criação).              |
| `status`                                                      | `string`  | Status inicial da submissão. Sempre `"DRAFT"` na criação.                   |
| `user`                                                        | `object`  | Usuário responsável pela criação da submissão.                              |
| `submissionNumber`                                            | `string`  | Número da submissão (inicialmente vazio).                                   |
| `sections`                                                    | `array`   | Estrutura base de seções associadas à submissão.                            |
| `isLegacy`                                                    | `boolean` | Indica que a submissão é do tipo legado (`true`).                           |
| `year`                                                        | `number`  | Ano de referência da submissão.                                             |
| `termOfParticipationWasAccepted`                              | `boolean` | Indica se o termo de participação foi aceito (padrão: `true`).              |
| `createdAt`, `updatedAt`                                      | `Date`    | Datas de criação e atualização.                                             |
| `_id`                                                         | `string`  | Identificador único da submissão criada.                                    |

### 🧩 Exemplo de resposta
```json
{
  "STATUS": "SUCCESS",
  "MESSAGE": "Successfully create the legacy submission",
  "DATA": {
    "notice": {
      "presentation": {
        "noticeNumber": "ICMS",
        "title": "Proac ICMS"
      },
      "_id": "62561852f50b9b001b416456",
      "program": "Proac ICMS"
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
    "_id": "6911e61eaf0d110830fb89a4",
    "status": "DRAFT",
    "user": {
      "_id": "65df76b0087695005eb05f58",
      "firstName": "Fernanda",
      "lastName": "Baccarini",
      "email": "fernanda.baccarini@bnpsolucoes.com.br",
      "roles": ["admin", "evaluatorICMS", "proponent", "dev", "aiUser"],
      "provider": "local",
      "isMailChecked": false
    },
    "submissionNumber": "",
    "sections": [
      {
        "_id": "6911e61eaf0d110830fb89a5",
        "formType": "ICMS",
        "status": "NOTSTARTED",
        "noticeSection": { "modules": [] },
        "expenseGroupList": [],
        "financialSource": [],
        "rows": [],
        "createdAt": "2025-11-10T13:18:22.387Z",
        "updatedAt": "2025-11-10T13:18:22.387Z"
      }
    ],
    "isLegacy": true,
    "year": 2025,
    "termOfParticipationWasAccepted": true,
    "createdAt": "2025-11-10T13:18:22.391Z",
    "updatedAt": "2025-11-10T13:18:22.391Z"
  }
}

```

## ⚠️ Observações Importantes

- O `noticeId` é obrigatório e deve corresponder a um edital válido existente.
- O status inicial da submissão criada é sempre `"DRAFT"`.
- Nenhum proponente é associado automaticamente; a vinculação deve ser feita posteriormente via `PUT /submission/legacy` com `proponentId`.
- O sistema cria automaticamente as seções base conforme o tipo de edital (ICMS, PROAC, etc.).
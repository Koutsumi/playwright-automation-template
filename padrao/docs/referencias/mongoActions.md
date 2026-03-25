# 🧩 MongoActions

Classe responsável por executar operações CRUD básicas no banco MongoDB, abstraindo a comunicação direta com o driver nativo.

Fornece métodos assíncronos para inserção, atualização, exclusão e consulta de documentos, garantindo uma interface simples e reutilizável.

### 📂 Localização

`config/libs/db/mongoActions.ts`

## 📦 Dependências
| Tipo              | Nome                               | Descrição                                                                                              |
| ----------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 🧩 Função interna | **connectToDatabase()**            | Estabelece a conexão com o banco MongoDB e retorna a instância do banco de dados.                      |
| 📚 Pacote externo | **mongodb** *(via driver oficial)* | Usado internamente por `connectToDatabase()` para manipulação de coleções e documentos.                |
| 🧱 Tipagem        | —                                  | Os parâmetros de entrada aceitam objetos genéricos (`object`), permitindo uso flexível entre coleções. |

## ⚙️ Métodos
### 📌 `insertOne(collectionName, data)`

Insere um único registro em uma coleção.
| Parâmetro          | Tipo     | Descrição                   |
| ------------------ | -------- | --------------------------- |
| **collectionName** | `string` | Nome da coleção de destino. |
| **data**           | `object` | Documento a ser inserido.   |

↩️ **Retorno:** `Promise<ObjectId[]>` — ID do registro inserido.

### 📌 `insertMany(collectionName, data)`

Insere múltiplos registros em uma coleção.

| Parâmetro          | Tipo       | Descrição                              |
| ------------------ | ---------- | -------------------------------------- |
| **collectionName** | `string`   | Nome da coleção.                       |
| **data**           | `object[]` | Lista de documentos a serem inseridos. |


↩️ **Retorno:**  `Promise<ObjectId[]>` — IDs dos registros inseridos.

### 📌 `updateOne(collectionName, filter, update)`

Atualiza um único registro baseado em um filtro.
| Parâmetro          | Tipo     | Descrição                                                     |
| ------------------ | -------- | ------------------------------------------------------------- |
| **collectionName** | `string` | Nome da coleção.                                              |
| **filter**         | `object` | Critério de busca para o documento a ser atualizado.          |
| **update**         | `object` | Dados a serem modificados (ex: `{ $set: { field: value } }`). |


↩️ **Retorno:**  `Promise<number>` — Quantidade de registros modificados (0 ou 1).

### 📌 `updateMany(collectionName, filter, update)`

Atualiza múltiplos registros que correspondem ao filtro informado.
| Parâmetro          | Tipo     | Descrição          |
| ------------------ | -------- | ------------------ |
| **collectionName** | `string` | Nome da coleção.   |
| **filter**         | `object` | Critério de busca. |
| **update**         | `object` | Dados a atualizar. |

↩️ **Retorno:**  `Promise<number>` — Número total de registros modificados.

### 📌 `deleteOne(collectionName, filter)`

Remove um único registro baseado em um filtro.
| Parâmetro          | Tipo     | Descrição             |
| ------------------ | -------- | --------------------- |
| **collectionName** | `string` | Nome da coleção.      |
| **filter**         | `object` | Critério de exclusão. |

↩️ **Retorno:**  `Promise<number>` — Quantidade de registros excluídos (0 ou 1).

### 📌 `deleteMany(collectionName, filter)`

Remove múltiplos registros com base em um filtro.`
| Parâmetro          | Tipo     | Descrição             |
| ------------------ | -------- | --------------------- |
| **collectionName** | `string` | Nome da coleção.      |
| **filter**         | `object` | Critério de exclusão. |

↩️ **Retorno:**  `Promise<number>` — Total de registros excluídos.

### 📌 `find(collectionName, filter)`

Retorna todos os registros que correspondem a um filtro.
| Parâmetro          | Tipo     | Descrição                             |
| ------------------ | -------- | ------------------------------------- |
| **collectionName** | `string` | Nome da coleção onde buscar os dados. |
| **filter**         | `object` | Critério de busca (pode estar vazio). |

↩️ **Retorno:**  `Promise<object[]>` — Lista de documentos correspondentes ao filtro.

### 📌 `findOne(collectionName, filter)`

Retorna o registro que corresponde ao filtro.
| Parâmetro          | Tipo     | Descrição                             |
| ------------------ | -------- | ------------------------------------- |
| **collectionName** | `string` | Nome da coleção onde buscar os dados. |
| **filter**         | `object` | Critério de busca (pode estar vazio). |

↩️ **Retorno:**  `Promise<object>` — Documento correspondente ao filtro.

## 🧾 Observações

- Todos os métodos retornam Promises, sendo necessário o uso de await ou .then().
- Ideal para uso em serviços ou repositórios, desacoplando a lógica de persistência do restante da aplicação.

## 🧭 Boas práticas

::: tip 💡 Recomendações
- Sempre defina índices únicos nas coleções para evitar duplicidade.
- Use filtros específicos em update e delete para evitar alterações acidentais em massa.
:::
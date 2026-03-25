# 🌐 headers

Define um conjunto de cabeçalhos HTTP padrão utilizados em requisições internas da aplicação.
A variável é exportada globalmente e configurada com base nas variáveis de ambiente carregadas via dotenv.

### 📂 Localização

`shared/headers.ts`

## 📦 Dependências
| Tipo                    | Nome              | Descrição                                                         |
| ----------------------- | ----------------- | ----------------------------------------------------------------- |
| 📚 Pacote externo       | **dotenv/config** | Carrega automaticamente as variáveis definidas no arquivo `.env`. |
| ⚙️ Variável de ambiente | **BASE_API_URL**  | Define a origem padrão (`origin`) utilizada nas requisições.      |

## 🧩 Propriedades
| Chave            | Tipo     | Valor padrão                       | Descrição                                                         |
| ---------------- | -------- | ---------------------------------- | ----------------------------------------------------------------- |
| **Content-Type** | `string` | `"application/json"`               | Define o formato padrão das requisições HTTP.                     |
| **origin**       | `string` | `process.env.BASE_API_URL` || `""` | Define a origem das requisições, baseada em variável de ambiente. |

## ⚙️ Funcionamento

- O módulo `dotenv/config` é importado, carregando variáveis do arquivo `.env`.
- A constante `headers` é inicializada com os campos padrão:
    - `Content-Type` fixo como `"application/json"`.
    - `origin` definido dinamicamente a partir de `BASE_API_URL`.
    - Essa constante pode ser importada e reutilizada em qualquer módulo que faça requisições HTTP.

## 🧾 Observações

- A variável `BASE_API_URL` deve estar definida no arquivo `.env`.
- Caso não esteja definida, o campo `origin` será uma string vazia.
- Ideal para padronizar chamadas HTTP internas, evitando repetição de configurações.

## 🧭 Boas práticas

::: tip 💡 Recomendações

- Centralize todas as definições de headers neste arquivo para facilitar manutenção.
- Evite sobrescrever Content-Type manualmente em múltiplos locais.
- Use variáveis de ambiente diferentes para ambiente de teste, desenvolvimento e produção.
:::
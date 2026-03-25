# 🔐 encryptPassword()

Criptografa uma senha em texto puro utilizando o algoritmo bcrypt.

Essa função é usada para gerar hashes seguros antes de enviar dados para rotas de cadastro, autenticação ou comparação de senhas.

### 📂 Localização

`shared/helpers/encryptPassword.ts`

## 📦 Dependências
| Tipo                  | Nome             | Descrição                                                                                     |
| --------------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| 📚 Pacote externo     | **bcryptjs**     | Implementação em JavaScript puro do algoritmo bcrypt — usada para gerar salt e hash da senha. |
| 🧱 Tipagem            | —                | A função utiliza tipos nativos do TypeScript (`string`, `number`, `Promise<string>`).         |
| 🔗 Função relacionada | **insertUser()** | Pode utilizar `encryptPassword()` internamente para gerar o hash antes da inserção.           |


## 🧩 Parâmetros
| Nome         | Tipo     | Padrão | Descrição                                                                                    |
| ------------ | -------- | ------ | -------------------------------------------------------------------------------------------- |
| `password`   | `string` | —      | Senha em texto puro que será criptografada.                                                  |
| `saltRounds` | `number` | `10`   | Quantidade de rounds usados para gerar o salt (quanto maior, mais seguro, porém mais lento). |

## 🔁 Retorno
| Tipo              | Descrição                                                     |
| ----------------- | ------------------------------------------------------------- |
| `Promise<string>` | Retorna uma *Promise* contendo o hash criptografado da senha. |

## 🧾 Observações

A função usa o pacote bcryptjs
, que é uma implementação em JavaScript puro do bcrypt — ideal para ambientes Node sem dependências nativas.

Os hashes gerados não são reversíveis — apenas comparáveis com a função bcrypt.compare().

Em testes de API, pode ser usada para:

- Criar usuários simulados em rotas de cadastro;
- Testar validação de senha criptografada;
- Gerar dados consistentes em fixtures.

## 🧭 Boas práticas

::: tip 💡 Recomendações

Mantenha o valor padrão de saltRounds em 10, a não ser que haja necessidade específica de simular maior custo computacional.

Utilize esta função apenas em contexto de teste ou mock — a API real deve ter sua própria lógica de hashing.
:::
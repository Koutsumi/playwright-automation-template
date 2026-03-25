# 🔢 generateCPF()

Gera um **CPF válido aleatório**, com dígitos verificadores calculados conforme as regras oficiais. 

A função pode retornar o CPF **formatado** (`000.000.000-00`) ou **somente números**, dependendo da necessidade.

Ideal para cenários de **testes automatizados**, **seed de banco**, **fakers** e validação de fluxos que exigem documentos válidos.


### 📂 Localização
`shared/helpers/generateCPF.ts`


## 📦 Dependências
Esta função **não possui dependências externas**.

Utiliza apenas:
- Funções nativas do JavaScript (`Math.random`, `Array.from`, `replace`, etc.)


## 🧩 Parâmetros

| Nome        | Tipo      | Padrão | Descrição |
|-------------|-----------|--------|-----------|
| `formatted` | boolean   | `false` | Define se o CPF será retornado formatado (`000.000.000-00`) ou apenas os 11 dígitos. |


## 🔁 Retorno

| Tipo   | Descrição |
|--------|-----------|
| `string` | CPF válido, com ou sem formatação dependendo do parâmetro. |


## ⚙️ Funcionamento

A função executa os seguintes passos:

1. **Gera 9 dígitos aleatórios**.
2. **Calcula o primeiro dígito verificador** com base na soma ponderada.
3. **Calcula o segundo dígito verificador**.
4. **Concatena** os 11 dígitos.
5. Caso `formatted = true`, aplica a máscara `000.000.000-00`.


## 🧾 Observações importantes

- Os dígitos verificadores seguem o **algoritmo oficial** utilizado na validação de CPFs.
- A função **não gera CPFs reais de pessoas**, apenas combinações matematicamente válidas.
- Pode ser utilizada em testes E2E, unitários, mocks e cenários de automação que exigem documentos válidos.


## 🧭 Boas práticas

::: tip 💡 **Recomendações**
- Utilize apenas em ambientes de desenvolvimento e teste.  
- Evite gerar CPFs aleatórios para registros persistentes em produção.   
:::
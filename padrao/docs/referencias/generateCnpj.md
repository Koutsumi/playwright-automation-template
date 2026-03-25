# 🏢 generateCNPJ()

Gera um **CNPJ válido aleatório**, incluindo o cálculo dos dois dígitos verificadores conforme o algoritmo oficial.  

A função pode retornar o CNPJ **formatado** (`00.000.000/0000-00`) ou apenas os **14 dígitos numéricos**.

Ideal para uso em **testes automatizados**, geração de massa de dados, cenários de cadastro de empresas e validação de fluxos que exigem documentos válidos.


### 📂 Localização
`shared/helpers/generateCNPJ.ts`


## 📦 Dependências

Esta função **não utiliza dependências externas**.

Recursos usados:
- Funções nativas do JavaScript (`Math.random`, `Array.from`, `replace`)


## 🧩 Parâmetros

| Nome        | Tipo    | Padrão   | Descrição |
|-------------|---------|----------|-----------|
| `formatted` | boolean | `false`  | Se `true`, retorna no formato `00.000.000/0000-00`; caso contrário, retorna apenas números. |


## 🔁 Retorno

| Tipo     | Descrição |
|----------|-----------|
| `string` | CNPJ válido, com ou sem formatação definida pelo parâmetro. |


## ⚙️ Funcionamento

A função executa os seguintes passos:

1. **Gera 8 dígitos base aleatórios**.
2. Adiciona a sequência **0001**, que representa o estabelecimento matriz.
3. Aplica os dois conjuntos de **pesos oficiais** (`weights1` e `weights2`) para calcular:
   - Primeiro dígito verificador
   - Segundo dígito verificador
4. Concatena os 14 dígitos resultando em um CNPJ válido.
5. Caso `formatted = true`, aplica a máscara `00.000.000/0000-00`.


## 🧾 Observações importantes

- Os dígitos verificadores são calculados usando o **algoritmo oficial da Receita Federal**.
- Assim como o CPF, o CNPJ gerado não corresponde a empresas reais, apenas combinações matematicamente válidas.

## 🧭 Boas práticas

::: tip 💡 **Recomendações**
- Use apenas em ambientes de desenvolvimento e teste.  
- Evite utilizar CNPJs fictícios em integrações externas reais.  
- Combine com validadores de CNPJ ao escrever testes.  
- Utilize este helper ao criar massa de dados automatizada.  
:::

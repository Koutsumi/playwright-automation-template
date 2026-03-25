# 📂 saveUserId() & getUserData()

Funções utilitárias para gerenciar informações de usuários em um arquivo JSON local, permitindo salvar e recuperar dados como **userId**, **email** e **caminho de cookies**.  
São úteis para cenários de autenticação em testes automatizados ou ambientes controlados.

### 📂 Localização
`shared/helpers/userId.ts`


## 📦 Dependências

### Tipo | Nome | Descrição | Pacote interno
| Tipo | Nome | Descrição | Pacote |
|------|------|-----------|--------|
| 🧱 Tipagem | `UserEntry` | Interface que define a estrutura dos dados persistidos no arquivo JSON. | — |
| 📚 Pacote interno | `fs` | Módulo nativo do Node.js usado para leitura e escrita de arquivos. | Node.js |


## ⚙️ Funcionamento

### **saveUserId()**
- Verifica se o arquivo `.auth/usersIdList.json` existe.  
- Lê os dados existentes e atualiza ou adiciona um novo usuário.  
- Persiste as informações no arquivo JSON com indentação para melhor legibilidade.  

### **getUserData()**
- Verifica se o arquivo `.auth/usersIdList.json` existe.  
- Busca um usuário pelo `cookiesPath`.  
- Retorna `userId` e `email` se encontrado, ou `null` caso contrário.  


## 🧩 Parâmetros

### **saveUserId()**
| Nome | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `name` | string | — | Nome do usuário. |
| `email` | string | — | E-mail do usuário. |
| `userId` | string | — | Identificador único do usuário. |
| `cookiesPath` | string | — | Caminho para os cookies associados ao usuário. |

### **getUserData()**
| Nome | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `cookiesPath` | string | — | Caminho para os cookies do usuário a ser buscado. |


## 🔁 Retorno

### **saveUserId()**
| Tipo | Descrição |
|------|-----------|
| `void` | Não retorna valor. Apenas atualiza o arquivo. |

### **getUserData()**
| Tipo | Descrição |
|------|-----------|
| `{ userId: string, email: string } \| null` | Retorna os dados do usuário se encontrado, ou `null` caso não exista. |


## 🧾 Observações

- O arquivo `.auth/usersIdList.json` deve existir ou será criado automaticamente.  
- Os dados são armazenados em formato JSON com indentação de 2 espaços.  
- Ideal para ambientes de teste que necessitam persistir informações temporárias.  


## 🧭 Boas práticas

::: tip 💡 **Recomendações**
- Utilize estas funções apenas em ambientes de desenvolvimento ou testes.  
- Evite armazenar informações sensíveis em arquivos locais sem criptografia.  
- Garanta que o caminho `.auth/usersIdList.json` esteja fora do controle de versão (adicione ao `.gitignore`).  
:::

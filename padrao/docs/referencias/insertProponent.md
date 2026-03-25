# 🧩 insertProponent()

Insere um **proponente** no banco de dados MongoDB, associando-o a um usuário criador.  

A função adapta o objeto recebido (`IProponent`) para o formato esperado pelo banco (`IProponentDatabaseRecord`) e registra metadados como datas, versionamento e listas relacionadas (usuários, fila, bloqueios).

É utilizada para preparar massa de dados em ambientes de teste ou para inicialização de cenários controlados.


## 📂 Localização
`shared/helpers/insertProponent.ts`


## 📦 Dependências

### Tipo | Nome | Descrição
| Tipo | Nome | Descrição |
|------|------|-----------|
| 🧩 ORM/DB Helper | `MongoActions` | Wrapper interno para ações MongoDB como `insertOne`. |
| 📦 Pacote externo | `ObjectId` (mongodb) | Converte `userId` para tipo `ObjectId`. |
| 🧱 Tipagem | `IProponent` | Estrutura de entrada contendo os dados do proponente. |
| 🧱 Tipagem | `IProponentDatabaseRecord` | Estrutura final persistida na coleção `proponents`. |


## 🧩 Parâmetros

| Nome | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `proponent` | `IProponent` | — | Dados do proponente que serão persistidos. |
| `userId` | `string` | — | ID do usuário criador, convertido para `ObjectId`. |


## 🔁 Retorno

| Tipo | Descrição |
|------|-----------|
| `Promise<boolean>` | Retorna **true** quando a inserção é bem-sucedida. Lança erro caso ocorra falha. |


## ⚙️ Funcionamento

A função realiza os seguintes passos:

1. Constrói um registro completo de proponente (`IProponentDatabaseRecord`) adicionando:
   - `creationUser` → ObjectId do usuário criador  
   - `users` → array contendo o criador  
   - `usersQueue`, `blockedUsers` → arrays iniciados vazios  
   - `creationDate`, `createdAt`, `updatedAt` → timestamps atuais  
   - `__v` → versionamento inicial (0)  
2. Chama `mongoAction.insertOne('proponents', dataProponent)` para inserir o documento.  
3. Em caso de sucesso, retorna `true`.  
4. Em caso de erro, loga no console e relança a exceção.


## 🧾 Observações importantes

- Esta função **não valida** os dados do proponente — assume que `IProponent` já está válido.  
- O `userId` deve ser uma string convertível para `ObjectId`, caso contrário ocorrerá erro.  
- Define datas e campos técnicos automaticamente (meta fields).  
- É ideal para testes que exigem cadastros prévios de proponentes antes de autenticações ou interações no fluxo.


## 🧭 Boas práticas

::: tip 💡 **Recomendações**
- Utilize apenas em ambientes de desenvolvimento e testes para criação de massa de dados.  
- Combine com geradores de documentos (CPF, CNPJ) para criar proponentes consistentes.  
- Sempre trate o erro ao chamar esta função, pois ela relança exceções do MongoDB.  
- Mantenha coerência com outros registros do sistema que referenciam o proponente.  
:::
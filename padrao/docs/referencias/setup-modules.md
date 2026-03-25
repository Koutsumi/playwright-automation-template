# 🧱 Setup por módulo

Cada módulo da aplicação possui agora seu próprio script de setup, responsável por preparar o estado de autenticação necessário antes da execução das suítes relacionadas àquele domínio.

Esse modelo garante:

- Isolamento de contexto
- Reuso de sessões por domínio
- Escalabilidade conforme novos módulos são criados

### 📂 Estrutura esperada

```txt
tests/
 └─ setup/
    ├─ admin.setup.ts
    ├─ financeiro.setup.ts
    ├─ relatorios.setup.ts
    └─ ...
shared/
 └─ repository/
    └─ modules.list.ts
```

## 📌 Regras obrigatórias

Para que o setup funcione corretamente, todas as regras abaixo devem ser seguidas:

### 1️⃣ Registro do módulo

Todo novo módulo DEVE ser adicionado no arquivo:

`shared/repository/modules.list.ts`

Esse arquivo é responsável por centralizar os módulos existentes e permitir que o setup global saiba quais autenticações precisam ser preparadas.

### 2️⃣ Nome do módulo = nome da pasta

O nome do módulo DEVE ser exatamente igual ao nome da pasta criada no projeto.

#### ✅ Correto:

```txt
modules/
 └─ financeiro/
```

```js
// modules.list.ts
export const modules = ['financeiro'];
```


#### ❌ Incorreto:

```txt
modules/
 └─ financeiro/
```

```js
// modules.list.ts
export const modules = ['finance'];
```


### 3️⃣ Padrão do arquivo de setup

O arquivo de setup DEVE seguir o padrão:

`nomedomodulo.setup.ts`


📌 O nome do módulo no arquivo precisa ser idêntico:

- ao nome da pasta
- ao nome registrado em modules.list.ts

#### ✅ Exemplo válido:

```txt
financeiro/
 └─ financeiro.setup.ts
```


#### ❌ Exemplo inválido:

```txt
financeiro/
 └─ authFinanceiro.setup.ts
```

## 🔄 Fluxo de execução (por módulo)

**Leitura dos módulos registrados**

O setup global identifica os módulos listados em `modules.list.ts`.

**Execução do setup correspondente**

Para cada módulo registrado:

- O arquivo `nomedomodulo.setup.ts` é carregado
- O processo de autenticação específico é executado

**Geração do storageState**

Cada módulo gera seu próprio arquivo de sessão: `.auth/cookies.<modulo>.json`

#### 📌 Exemplo:

`.auth/cookies.financeiro.json`
`.auth/cookies.admin.json`

## 🧪 Uso nos testes

Os testes de cada módulo devem referenciar exclusivamente o storageState correspondente:

```js
test.use({
  storageState: './.auth/cookies.financeiro.json',
});
```
Isso garante:

- Sessão correta
- Permissões adequadas
- Isolamento entre domínios

## 🧾 Observações importantes

Os setups não executam testes, apenas preparam o ambiente

Cada módulo pode:

- Criar usuários específicos
- Definir permissões próprias
- Utilizar endpoints diferentes de login

O setup ADMIN continua existindo, mas agora é apenas mais um módulo

## 🧭 Boas práticas
:::

- Sempre registre o módulo em modules.list.ts
- Nunca reutilize storageState de outro módulo
- Mantenha o nome do módulo consistente em todos os níveis
- Utilize banco de dados de testes isolado
- Ignore a pasta .auth/ no versionamento (.gitignore)
- Documente regras de acesso específicas dentro do setup do módulo

:::
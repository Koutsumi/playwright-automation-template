# 🧪 Testes Automatizados – Playwright (API & E2E)

Projeto de testes automatizados desenvolvido em Playwright + TypeScript, com foco em testes de API e estrutura preparada para E2E.
A arquitetura modular garante organização, reuso e escalabilidade dos testes.

## ⚙️ Dependências

Principais libs:

🎭 Playwright
 – framework de automação de testes

🔠 TypeScript
 – tipagem e suporte ES Modules

🔐 bcryptjs
 – criptografia de senhas

🍃 mongodb
 – conexão direta ao banco

🌱 dotenv
 – gerenciamento de variáveis de ambiente

🗃️ vitepress
- documentação da automação

Instalação:

```shell
npm install
```
package.json (resumo):

```json
 "devDependencies": {
    "@playwright/test": "^1.56.1",
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^24.10.0",
    "vitepress": "^1.6.4"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "dotenv": "^17.2.3",
    "mongodb": "^6.20.0"
  }
```

### 🌍 Configuração do Ambiente
🔧 Criar arquivo .env
```shell
cp .env.example .env
```

Exemplo:

```txt
DB_URI=""
DB_NAME=""

BASE_API_URL="" 
```


🚀 Execução

- Rodar todos os testes
```shell
npx playwright test
```

- Apenas testes de API
```shell
npx playwright test tests/api
```

- Gerar relatório
```shell
npx playwright show-report
```

- Rodar documentação
```shell
npx vitepress dev docs
```
OBS.: Altere o nome da pasta do projeto para `PROACExpressoE2ETests`
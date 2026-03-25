# 1️⃣ Getting Started 
Este projeto tem como objetivo a automação de testes para uma plataforma pública voltada à gestão de editais culturais. A automação foi desenvolvida utilizando Playwright com TypeScript, contemplando testes de API e estrutura preparada para testes E2E (End-to-End).

A arquitetura modular adotada garante organização, reuso e escalabilidade, permitindo que os testes sejam facilmente mantidos e expandidos conforme a evolução da plataforma.

## ⚙️ Principais Dependências

- 🎭 Playwright – framework de automação de testes
- 🔠 TypeScript – tipagem estática e suporte a ES Modules
- 🔐 bcryptjs – criptografia de senhas
- 🍃 mongodb – conexão direta ao banco de dados
- 🌱 dotenv – gerenciamento de variáveis de ambiente
- 🗃️ vitepress – documentação técnica da automação

## 📦 Instalação
Na raíz do projeto
```shell
npm install
```
Em seguida, instale os navegadores utilizados pelo Playwright:

```shell
npx playwright install
```
### 🌍 Configuração do Ambiente
Crie o arquivo .env com base no exemplo:
```shell
cp .env.example .env
```
E preencha as variáveis solicitadas

## 🧪 Execução dos Testes
- Rodar todos os testes:
```shell
npx playwright test
```
- Rodar apenas testes de API:
```shell
npx playwright test/api
```

## 🧰 Comandos úteis

- **Executar os testes com interface gráfica (UI mode)**
    - Permite visualizar, filtrar e depurar testes com uma interface interativa:

```shell
npx playwright test --ui
```
- **Executar um teste em modo debug (passo a passo)**
    - Ideal para identificar falhas e analisar o fluxo de execução:

```shell
npx playwright test --debug
```
- **Executar um teste específico**
Permite rodar apenas um arquivo ou caso de teste:
```shell
npx playwright test tests/api/links.spec.ts
```
- **Executar testes com log detalhado**
```shell
npx playwright test --trace on
```
- **Abrir o relatório de execução mais recente**
```shell
npx playwright show-report
```
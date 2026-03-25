# 🧭 Boas Práticas

Ao desenvolver testes automatizados, principalmente de API, é essencial manter uma estrutura clara, previsível e totalmente independente. Isso facilita a manutenção, reduz erros intermitentes (flaky tests) e garante que o teste reflita o comportamento real do sistema.

Abaixo estão as diretrizes que devem ser seguidas para garantir qualidade e padronização em todos os arquivos de teste.

## 🧱 Estrutura básica com `describe`

Cada arquivo de teste deve começar com um bloco test.describe(), que representa um endpoint ou uma funcionalidade específica.
O objetivo é agrupar todos os testes relacionados a uma mesma rota, ação ou contexto.

- O nome do describe deve conter o método HTTP e o endpoint completo.
- Use o caminho completo da rota.

```ts
test.describe("GET /api/users", () => {
  // test cases...
});

test.describe("POST /api/links", () => {
  // test cases...
});
```
Essa estrutura deixa evidente o que está sendo testado, evitando ambiguidades quando o projeto cresce e existem várias rotas semelhantes.

## 🧩 Estrutura dos testes dentro do `describe`
Dentro de cada describe, devem existir test cases individuais (test()), e cada um deve validar um único comportamento.

Cada test() deve:

- Ser curto e direto;
- Ter um único objetivo claro (ex: sucesso ou erro específico);
- Ter um nome descritivo em inglês, sempre iniciando com “Should ...”.

Exemplos:
```ts
test("Should create a new link successfully", async () => { ... });
test("Should return 400 when title is missing", async () => { ... });
test("Should not create a link with invalid URL", async () => { ... });

```

| ❌ Ruim                   | ✅ Correto                                        |
| ------------------------ | ------------------------------------------------ |
| "Create link test"       | "Should create a new link successfully"          |
| "Error when URL invalid" | "Should return 400 when original_url is invalid" |
| "Missing title"          | "Should not create a link without title"         |


👉 Nunca combine múltiplas validações (ex: sucesso + erro) dentro do mesmo teste.

## 🔁 Independência entre os testes

Cada teste deve ser 100% independente dos demais.
Isso significa que nenhum teste pode depender de outro para funcionar, nem compartilhar o mesmo dado inserido ou token gerado.

Boas práticas:

- Sempre crie seus próprios dados (usuário, token, registros) dentro do próprio teste ou dentro de um `beforeEach()`;
- Nunca reutilize dados criados em outro teste;
- Evite o uso de variáveis globais compartilhadas fora do escopo do `describe`.

Essa independência garante que, se um teste falhar, os outros ainda possam ser executados e validados normalmente, sem efeito colateral.

## 🧹 Limpeza e controle de massa de dados

Antes de criar qualquer dado novo, é obrigatório remover registros anteriores que possam interferir nos resultados.

Exemplo prático:
```ts
test.beforeAll(async () => {
  // Remove qualquer usuário com o mesmo e-mail antes do teste rodar
  await mongo.deleteOne("users", { email: testUser.email });
});
```
Essa limpeza impede falhas causadas por dados duplicados, usuários já existentes ou tokens expirados.

Além disso:

- Prefira massas pequenas e bem definidas — apenas o necessário para validar o cenário;
- Se o teste cria algo (ex: um proponente, usuário, etc.), ele deve ser responsável por limpá-lo ao final, caso necessário;

## 🧭 Filosofia geral

- Cada teste deve ser capaz de rodar isoladamente — como se fosse o único da suíte.
- Se a API fosse reiniciada entre cada teste, todos ainda deveriam passar.
- A legibilidade vale mais que a quantidade: é melhor ter 10 testes claros do que 3 testes grandes e genéricos.
- Cada teste deve ter um propósito específico: criar, validar erro, autenticar, etc.

### ✅ Em resumo:
| Princípio             | Descrição                                                         |
| --------------------- | ----------------------------------------------------------------- |
| **Isolamento**        | Nenhum teste depende de outro.                                    |
| **Limpeza**           | Sempre apagar a massa de dados antes de criar novos registros.    |
| **Clareza**           | Describes indicam endpoint; testes descrevem comportamento.       |
| **Consistência**      | Sempre usar inglês e padrão “Should ...”.                         |
| **Automação robusta** | Cada teste deve reproduzir fielmente o comportamento real da API. |

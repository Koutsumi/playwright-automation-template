# tests

Esta pasta concentra a suíte automatizada do projeto.

## Organização obrigatória

- `api/`: testes de API;
- `e2e/`: testes de interface;
- arquivos `*.setup.ts`: preparação necessária antes da suíte do módulo;
- arquivos `*.spec.ts`: cenários de teste.

## Padrões de escrita

- cada teste deve validar um comportamento claro;
- nomes de arquivos devem refletir intenção, como `success.spec.ts` e `errors.spec.ts`;
- mantenha independência entre cenários;
- use módulos, pages, fixtures e shared para reduzir repetição.

## Regras

- não concentre lógica de negócio complexa dentro do teste;
- não reutilize estado implícito entre arquivos sem setup explícito;
- mantenha a mesma estrutura de módulos entre `tests/`, `modules/` e listas de configuração.

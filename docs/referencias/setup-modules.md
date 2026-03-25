# Setup por Modulo

Cada modulo pode ter seu proprio arquivo de setup para preparar dados, autenticacao e cookies antes da execucao dos testes.

No template atual, o exemplo principal esta em `tests/api/auth/auth.setup.ts` e foi inspirado no fluxo do repositório `padrao`.

## Estrutura esperada

```txt
tests/
├─ api/
│  └─ auth/
│     ├─ auth.setup.ts
│     ├─ success.spec.ts
│     └─ errors.spec.ts
└─ e2e/
   └─ auth/
      ├─ auth.setup.ts
      ├─ success.spec.ts
      └─ errors.spec.ts
```

## Fluxo logico recomendado

1. identificar o usuario que a suite precisa;
2. limpar dados antigos no banco, se necessario;
3. recriar esse usuario via camada de banco;
4. executar login quando a suite depender de sessao autenticada;
5. salvar `storageState` em `.auth/` apenas para suites que precisem começar autenticadas.

## Quando usar storageState

Use `storageState` em suites de area autenticada, como dashboard, listagens internas ou fluxos administrativos.

Evite `storageState` em testes de login, porque nesses casos o proprio login e o comportamento que esta sendo validado.

## Boas praticas

- mantenha o setup no mesmo modulo dos testes que dependem dele;
- concentre a logica de banco em `shared/database`;
- centralize o login em helpers de modulo, como `modules/auth/helpers/`;
- use fixtures para definir perfis previsiveis, como `admin()`.

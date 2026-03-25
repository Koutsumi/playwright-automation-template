# tests/e2e/auth

Esta pasta guarda os testes E2E do módulo `auth`.

## O que deve conter

- `auth.setup.ts` para preparar sessão, storage state ou contexto inicial;
- `success.spec.ts` para fluxos válidos de autenticação;
- `errors.spec.ts` para mensagens, bloqueios e falhas esperadas;
- arquivos adicionais por fluxo quando a cobertura crescer.

## Padrões de organização

- centralize interação de interface em `pages/`;
- mantenha os cenários orientados ao comportamento do usuário;
- use nomes de testes que deixem claro o resultado esperado;
- reaproveite dados e helpers em vez de repetir passos extensos.

## Boas práticas

- valide elementos importantes após login;
- cubra erros de autenticação visíveis em tela;
- não esconda detalhes de falha relevantes dentro de helpers genéricos.

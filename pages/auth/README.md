# pages/auth

Esta pasta guarda os Page Objects e componentes de interface específicos do fluxo de autenticação.

## O que deve conter

- abstrações da tela de login;
- componentes compartilhados do fluxo de autenticação;
- métodos para preencher credenciais, submeter formulários e validar estados visuais do domínio `auth`.

## Padrões

- use nomes como `login.page.ts`, `forgot-password.page.ts` ou equivalentes;
- concentre seletores e interações aqui, não nos testes;
- exponha métodos claros e reutilizáveis para os cenários de `tests/e2e/auth`.
- quando um locator for reutilizado, declare-o como propriedade da classe;
- quando o locator for usado uma única vez e fizer mais sentido localmente, ele pode ficar dentro do método correspondente.

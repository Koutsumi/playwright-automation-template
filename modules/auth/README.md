# modules/auth

Esta pasta representa o módulo `auth` do template.

## O que deve conter

- implementações relacionadas a autenticação;
- helpers de login e persistência de sessão;
- payloads, tipos e contratos específicos do domínio de autenticação;
- repositórios e enums internos do módulo, quando necessário.

## Padrões

- mantenha arquivos com responsabilidade única;
- prefira separar `helpers/`, `repository/`, `types` e `enums` quando o módulo crescer;
- exponha pontos de entrada previsíveis em `index.ts` quando fizer sentido;
- evite chamar APIs diretamente dentro dos testes se esse comportamento puder ser reutilizado aqui.
- siga o padrão do diretório `padrao/` para helpers como login e persistência de cookies.

## O que não deve ficar aqui

- Page Objects;
- utilitários genéricos compartilhados com outros módulos;
- conexão direta com banco fora de `shared/database`.

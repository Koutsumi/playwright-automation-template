# fixtures

Esta pasta armazena massa de dados reutilizável pelos testes.

## O que deve conter

- payloads estáticos;
- dados base para cenários recorrentes;
- objetos de apoio para criação de usuários, entidades e permissões;
- massas pequenas e previsíveis para API e E2E.

## Padrões

- prefira arquivos `.ts` exportando objetos e funções tipadas;
- mantenha nomes orientados ao domínio, por exemplo `users.ts`, `orders.ts`;
- se a massa for específica de um módulo, avalie deixá-la dentro do próprio módulo;
- mova para `fixtures/` apenas o que for reutilizado por mais de um cenário ou suíte.

## O que evitar

- massa gigantesca e difícil de manter;
- dados sensíveis reais;
- lógica complexa de criação de massa dentro de fixture estática.

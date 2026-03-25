# pages/shared

Esta pasta é reservada para componentes de interface reutilizados por mais de um módulo E2E.

## O que deve conter

- componentes comuns, como menus, headers, modais e tabelas;
- helpers de navegação reaproveitados entre páginas;
- abstrações visuais que não pertencem a um único domínio.

## Regra principal

Se a abstração atende apenas um módulo, ela deve permanecer dentro da pasta específica desse módulo, como `pages/auth`. Use `pages/shared` apenas para reuso real.

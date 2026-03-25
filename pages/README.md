# pages

Esta pasta é reservada para Page Objects e abstrações de interface usadas nos testes E2E.

## O que deve conter

- classes ou funções que encapsulem interações com páginas;
- seletores centralizados;
- componentes reutilizáveis de interface;
- ações de alto nível, como login, navegação e preenchimento de formulários.

## Padrões

- organize por página ou fluxo da aplicação;
- nomes de arquivos devem refletir a tela ou componente, por exemplo `login.page.ts`;
- centralize seletores aqui sempre que eles forem reutilizados;
- exponha métodos legíveis, evitando repetir sequências longas de clique e preenchimento nos testes.

## O que evitar

- assertions complexas misturadas com navegação quando isso puder ser separado;
- regra de negócio fora do contexto de interface;
- utilitários genéricos que deveriam estar em `shared/`.

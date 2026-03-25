# Boas Práticas

## Padronização do template

- mantenha a mesma convenção de pastas entre projetos;
- evite criar utilitários genéricos dentro de módulos específicos;
- concentre integrações compartilhadas em `shared/`;
- mantenha configuração de banco sempre em `shared/database`.

## Organização dos testes

- separe cenários de `api` e `e2e`;
- use nomes descritivos para `describe` e `test`;
- mantenha cada teste com um único objetivo;
- prefira dados criados no próprio teste ou em hooks controlados.
- escreva os cenários seguindo `Arrange`, `Act` e `Assert`;
- use `success.spec.ts` e `errors.spec.ts` como convenção inicial, refinando depois se o módulo crescer.

## Independência

- um teste não deve depender de outro;
- cada cenário deve preparar seus dados e limpar o que for necessário;
- evite reaproveitar massa dinâmica entre arquivos sem controle claro.

## Módulos

- crie um módulo quando houver um domínio funcional claro;
- mantenha builders, payloads, services e helpers próximos do módulo que os usa;
- mova para `shared/` apenas o que de fato é reaproveitado por mais de um módulo.

## Page Objects

- mantenha os seletores de interface fora dos testes E2E;
- crie uma classe por página;
- promova locator para propriedade da classe apenas quando ele for reutilizado;
- exponha métodos com intenção de negócio, como `login`, `save`, `search`.

## Banco de dados

- não espalhe conexão de banco em testes ou módulos;
- exponha funções utilitárias ou repositórios a partir de `shared/database`;
- use `mongodb` somente em projetos que realmente usam MongoDB;
- use `knex` em projetos SQL para padronizar client, query builder e transações.

## Documentação

- atualize a doc sempre que a estrutura base do template mudar;
- documente decisões que se repetem entre projetos;
- prefira exemplos curtos e copiáveis para onboarding rápido.

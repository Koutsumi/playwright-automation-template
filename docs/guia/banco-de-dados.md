# Banco de Dados

Cada projeto pode usar um banco diferente. O template não obriga MongoDB nem SQL.

A regra é simples: a configuração de banco deve ficar em `shared/database`.

## Convenção

Use `shared/database` para centralizar:

- client de conexão;
- leitura de variáveis de ambiente;
- factories;
- helpers de cleanup;
- queries ou repositórios compartilhados.

## Quando usar MongoDB

Se o projeto usa MongoDB, a recomendação é usar a biblioteca oficial `mongodb`.

Casos comuns:

- seed e cleanup de massa;
- consulta direta para validação de estado;
- atualização de registros de apoio para preparar cenários.

Veja a referência em [MongoDB](/referencias/mongodb).

## Quando usar SQL

Se o projeto usa banco relacional, a recomendação é usar `knex`.

Casos comuns:

- consultas de apoio para validação;
- inserts e deletes controlados para massa de teste;
- transações para preparar e desfazer cenários;
- padronização de acesso entre diferentes bancos SQL.

Veja a referência em [SQL com Knex](/referencias/knex).

## O que evitar

- abrir conexão diretamente dentro do teste;
- duplicar configuração em vários módulos;
- misturar lógica de query com assertions do teste quando isso dificultar manutenção;
- usar uma biblioteca diferente em cada projeto sem necessidade.

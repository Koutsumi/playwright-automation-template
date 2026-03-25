# shared

Esta pasta concentra recursos reutilizáveis por mais de um módulo.

## O que deve conter

- utilitários comuns;
- helpers de infraestrutura;
- contratos compartilhados;
- integrações técnicas reaproveitáveis, como banco de dados.

## Regra principal

Só mova algo para `shared/` quando ele realmente for compartilhado. Se o código atende apenas um domínio, ele deve continuar dentro do módulo correspondente.

## Subpastas esperadas

- `database/`: conexão, client e helpers de acesso a banco;
- outras subpastas podem existir, desde que representem reuso real entre módulos.

# tests/api

Esta pasta reúne os testes de API do projeto.

## O que deve conter

- uma pasta por módulo de negócio;
- arquivos `.setup.ts` para preparação do módulo, quando necessário;
- arquivos `.spec.ts` separados por tipo de cenário.

## Padrões

- espelhe os módulos registrados em `modules/apiModules.ts`;
- organize por domínio e, se necessário, por operação HTTP ou fluxo;
- valide status code, contrato, regra de negócio e efeitos colaterais esperados;
- use helpers de `modules/`, `fixtures/` e `shared/` para montar dados e chamadas.

## Nomenclatura sugerida

- `success.spec.ts` para cenários positivos;
- `errors.spec.ts` para cenários negativos;
- nomes mais específicos quando houver muitas operações, por exemplo `create-user.spec.ts`.

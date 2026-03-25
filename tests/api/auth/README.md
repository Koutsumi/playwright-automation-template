# tests/api/auth

Esta pasta guarda os testes de API do módulo `auth`.

## O que deve conter

- `auth.setup.ts` quando o módulo precisar preparar contexto antes dos testes;
- cenários positivos em `success.spec.ts`;
- cenários negativos ou de validação em `errors.spec.ts`;
- novos arquivos quando o domínio crescer, sempre com nomes descritivos.

## Padrões de implementação

- consuma funções do módulo `modules/auth`;
- mantenha payloads e contratos fora do arquivo de teste sempre que houver reuso;
- cubra autenticação bem-sucedida, falhas de credencial, validações obrigatórias e permissões quando aplicável.

## O que evitar

- duplicar chamadas e payloads longos diretamente nos testes;
- misturar regras de outros módulos dentro desta pasta.

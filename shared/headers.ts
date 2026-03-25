import 'dotenv/config';

/**
 * Headers base para requisicoes de API.
 *
 * O objetivo e centralizar cabecalhos comuns para que os modulos de API
 * reutilizem sempre a mesma estrutura.
 *
 * Ajustes comuns por projeto:
 * - adicionar `Authorization` quando a API exigir token;
 * - adicionar headers de tenant, idioma ou versao;
 * - manter `origin` coerente com a aplicacao testada.
 */
export const headers = {
  'Content-Type': 'application/json',
  origin: process.env.BASE_API_URL || '',
};

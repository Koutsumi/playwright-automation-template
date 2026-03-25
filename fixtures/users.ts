import 'dotenv/config';
import { randomBytes } from 'node:crypto';
import type { IUserData } from '../modules/auth/repository/user.types';

/**
 * A ideia e manter perfis conhecidos, como `admin()`, e um gerador `user()`
 * para cenarios que precisem de usuarios unicos por execucao.
 * Cada projeto pode adaptar nome, email-base, senha e roles reais da aplicacao.
 */
function user(identification: string, name: string, role: string | null = null): IUserData {
  return {
    email: `user.${randomBytes(8).toString('hex')}.${identification}.playwright@example.com`,
    password: process.env.E2E_USER_PASSWORD ?? '123456',
    name,
    role,
  };
}

function admin(): IUserData {
  return {
    email: process.env.E2E_USER_EMAIL ?? 'admin.playwright@example.com',
    password: process.env.E2E_USER_PASSWORD ?? '123456',
    name: process.env.E2E_USER_NAME ?? 'Administrador Playwright',
    role: null,
  };
}

export default {
  user,
  admin,
};

// shared/helpers/encryptPassword.ts
import bcrypt from 'bcryptjs';

/**
 * Criptografa uma senha usando bcrypt.
 * @param password Senha em texto puro
 * @param saltRounds Número de rounds de salt (padrão: 10)
 * @returns Hash da senha criptografada
 */
export async function encryptPassword(password: string, saltRounds = 10): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

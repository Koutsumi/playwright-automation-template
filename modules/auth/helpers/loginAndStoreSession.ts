import type { APIRequest } from '@playwright/test';
import type { IUserData } from '../repository/user.types';

export async function loginAndStoreSession(request: APIRequest, user: IUserData, cookiesPath: string) {
  /**
   * Fluxo esperado, baseado no `padrao/modules/auth/helpers/loginAndStoreSession.ts`:
   * 1. criar um `request.newContext()`;
   * 2. garantir que o usuario ja exista no banco;
   * 3. chamar `AuthServices.login(...)`;
   * 4. validar status e corpo da resposta;
   * 5. salvar `storageState` em `.auth/...json`;
   * 6. opcionalmente salvar `userId` para reuso posterior.
   */
  void request;
  void user;
  void cookiesPath;
  throw new Error('Implemente o login e a persistencia de cookies conforme a API do projeto.');
}

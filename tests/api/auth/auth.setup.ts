import { test as setup } from '@playwright/test';
import usersFixture from '../../../fixtures/users';
// import { MongoActions } from '../../../shared/database/mongoActions';
// import { loginAndStoreSession } from '../../../modules/auth/helpers/loginAndStoreSession';

const exampleUser = usersFixture.admin();

setup.beforeAll(async () => {
  /**
   * Fluxo recomendado para este setup, conforme o projeto `padrao`:
   * 1. buscar no banco um usuario com o mesmo email da fixture;
   * 2. excluir registros antigos relacionados a esse usuario;
   * 3. recriar o usuario via banco;
   * 4. se a suite depender de sessao autenticada, fazer login e salvar cookies.
   *
   * Referencias do `padrao`:
   * - `padrao/tests/auth.setup.ts`
   * - `padrao/modules/auth/helpers/loginAndStoreSession.ts`
   * - `padrao/shared/helpers/insertUser.ts`
   */
  void exampleUser;
});

setup('Should create the user in database and store auth cookies', async () => {
  /**
   * Exemplo logico do que este setup deve fazer:
   * - usar `MongoActions` ou a camada de banco escolhida;
   * - inserir o usuario de `fixtures/users.ts`;
   * - chamar o helper `loginAndStoreSession(...)` quando houver necessidade
   *   de armazenar cookies para reuso nas suites API/E2E.
   */
});

import { expect, test } from '@playwright/test';
import usersFixture from '../../../fixtures/users';
import AuthServices from '../../../modules/auth';
import type { IAuthenticationRequest } from '../../../modules/auth/repository/auth.types';

test.describe('POST /auth/login', () => {
  test('Should reject authentication with invalid credentials', async ({ request }) => {
    test.skip(!process.env.BASE_API_URL, 'Defina BASE_API_URL no .env para usar este exemplo.');

    // Arrange:
    // 1. obter um usuario valido da fixture;
    // 2. alterar apenas o dado que deve provocar erro;
    // 3. manter o resto do payload o mais proximo possivel de um caso real.
    const validUser = usersFixture.admin();
    const user: IAuthenticationRequest = {
      email: validUser.email,
      password: `${validUser.password}-invalid`,
    };

    // Act:
    // Executar o login com credenciais invalidas.
    const response = await AuthServices.login(request, user);

    // Assert:
    // Validar que a autenticacao falhou.
    // No projeto real, o ideal e validar tambem:
    // - status code esperado;
    // - mensagem de erro;
    // - codigo/estrutura de erro retornada pela API.
    expect(response.ok()).toBeFalsy();
  });
});

import { expect, test } from '@playwright/test';
import usersFixture from '../../../fixtures/users';
import AuthServices from '../../../modules/auth';
import type { IAuthenticationRequest } from '../../../modules/auth/repository/auth.types';

test.describe('POST /auth/login', () => {
  test('Should authenticate a valid user successfully', async ({ request }) => {
    test.skip(!process.env.BASE_API_URL, 'Defina BASE_API_URL no .env para usar este exemplo.');

    // Arrange:
    // 1. obter um usuario valido da fixture;
    // 2. garantir que o `auth.setup.ts` ja preparou esse usuario no banco, se necessario;
    // 3. montar o payload exatamente como a API espera.
    const user: IAuthenticationRequest = usersFixture.admin();

    // Act:
    // Executar a chamada para o endpoint de login usando o modulo `AuthServices`.
    const response = await AuthServices.login(request, user);

    // Assert:
    // Validar o status de sucesso e, quando fizer sentido no projeto real,
    // validar tambem o corpo da resposta, token, usuario retornado e cookies.
    expect(response.ok()).toBeTruthy();
  });
});

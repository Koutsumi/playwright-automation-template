import { expect, test } from '@playwright/test';
import usersFixture from '../../../fixtures/users';
import { LoginPage } from '../../../pages/auth/login.page';

test.describe('Login', () => {
    // Observacao sobre `storageState`:
    // Assim como no teste de sucesso, este cenario nao deve nascer
    // autenticado. Se o objetivo for validar areas protegidas apos login,
    // ai sim o `storageState` pode ser habilitado no arquivo ou no `describe`.
  test('Should keep the user on login screen with invalid credentials', async ({ page }) => {
    test.skip(!process.env.BASE_E2E_URL, 'Defina BASE_E2E_URL no .env para usar este exemplo.');

    // Arrange:
    // 1. partir de um usuario conhecido;
    // 2. alterar apenas a credencial que deve falhar;
    // 3. navegar para a tela de login.

    const validUser = usersFixture.admin();
    const loginPage = new LoginPage(page);

    // Act:
    // Executar o login com credencial invalida usando o Page Object.
    await loginPage.goto();
    await loginPage.login(validUser.email, `${validUser.password}-invalid`);

    // Assert:
    // Validar que o usuario nao avancou no fluxo.
    // No projeto real, tambem e recomendado validar:
    // - mensagem de erro em tela;
    // - estado do botao;
    // - ausencia de elementos da area autenticada.
    await expect(page).toHaveURL(/login/i);
  });
});

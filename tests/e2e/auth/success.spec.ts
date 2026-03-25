import { expect, test } from '@playwright/test';
import usersFixture from '../../../fixtures/users';
import { LoginPage } from '../../../pages/auth/login.page';

test.describe('Login', () => {
    // Observacao sobre `storageState`:
    // Testes de login normalmente NAO devem reutilizar sessao autenticada,
    // porque o objetivo e justamente validar a autenticacao.
    //
    // O uso de `storageState` faz mais sentido em suites que precisam
    // começar ja autenticadas, por exemplo:
    // test.use({ storageState: './.auth/cookies.admin.json' });
  test('Should allow a valid user to sign in', async ({ page }) => {
    test.skip(!process.env.BASE_E2E_URL, 'Defina BASE_E2E_URL no .env para usar este exemplo.');

    // Arrange:
    // 1. obter um usuario valido da fixture;
    // 2. abrir a pagina inicial do fluxo.
   
    const user = usersFixture.admin();
    const loginPage = new LoginPage(page);

    // Act:
    // Executar o fluxo principal usando o Page Object da tela.
    await loginPage.goto();
    await loginPage.login(user.email, user.password);

    // Assert:
    // Validar o comportamento esperado apos o login.
    // No projeto real, prefira validar um elemento da tela de destino
    // em vez de depender apenas da URL.
    await expect(page).not.toHaveURL(/login/i);
  });
});

import { test, expect } from '@playwright/test';
import usersFixture from '../../../../fixtures/users.ts';
import AuthServices from '../../../../modules/auth/index.ts';

test.describe('POST /auth/forgot', () =>{

    test('Should send a password reset email for a valid user', async ({ request }) => {
        const user = usersFixture.admin();

        const response = await AuthServices.forgot(request, user.email);
        
        expect(response.status()).toBe(204);

        // TODO validar o envio do email (sendgrid)
    });

    test('Should return 400 for a non-existent user', async ({ request }) => {
        const unregistreredEmail = 'unregistrered_email.playwright@bnpsolucoes.com.br';

        const response = await AuthServices.forgot(request, unregistreredEmail);
        expect(response.status()).toBe(400);

        const { STATUS, MESSAGE, PTMESSAGE } = await response.json();
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe('The user couldn\'t be found.');
        expect(PTMESSAGE).toBe('O usuário não pôde ser encontrado.');
    });

    test('Should return 400 when email is not provided', async ({ request }) => {
        const userEmail = '';

        const response = await AuthServices.forgot(request, userEmail);
        expect(response.status()).toBe(400);

        const { STATUS, MESSAGE, PTMESSAGE } = await response.json();
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe('Parameter \"email\" was not provided.');
        expect(PTMESSAGE).toBe('O parâmetro \"email\" não foi fornecido.');
    });

});
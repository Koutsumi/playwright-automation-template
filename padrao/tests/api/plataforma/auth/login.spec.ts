import { test, expect } from '@playwright/test';
import usersFixture from '../../../../fixtures/users.ts';
import AuthServices from '../../../../modules/auth/index.ts';
import { IAuthenticationRequest } from '../../../../modules/auth/repository/auth.types.ts';

const userAdmin = usersFixture.admin();

test.describe('POST /auth/login', () =>{

    // TODO adicionar usuario próprio para este teste no banco antes de rodar o teste

    test('Should not login with invalid credentials', async ({ request }) => {
        const user : IAuthenticationRequest = {
            email: userAdmin.email,
            password: userAdmin.password + 'invalid'
        }
        
        const response = await AuthServices.login(request, user);
        expect(response.status()).toBe(400);

        const { STATUS, MESSAGE } = await response.json();
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe('Invalid username or password');
    });

    test('Should not login with unregistered email', async({request}) => {
        const user : IAuthenticationRequest = {
            email: 'unregistrered_email.playwright@bnpsolucoes.com.br',
            password: userAdmin.password + 'invalid'
        }
        
        const response = await AuthServices.login(request, user);
        expect(response.status()).toBe(400);

        const { STATUS, MESSAGE } = await response.json();
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe('Invalid username or password');
    });

    test('Should not login without email', async ({ request }) => {
        const user = {
            ////email: userAdmin.email,
            password: userAdmin.password + 'invalid'
        }
        
        const response = await AuthServices.login(request, user);
        expect(response.status()).toBe(400);

        const { STATUS, MESSAGE, PTMESSAGE } = await response.json();
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe('There was an error with your email or password.');
        expect(PTMESSAGE).toBe('Houve um erro com seu e-mail ou senha');
    });

    test('Should not login without password', async ({ request }) => {
        const user = {
            email: userAdmin.email,
            ////password: userAdmin.password + 'invalid'
        }
        
        const response = await AuthServices.login(request, user);
        expect(response.status()).toBe(400);

        const { STATUS, MESSAGE, PTMESSAGE } = await response.json();
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe('There was an error with your email or password.');
        expect(PTMESSAGE).toBe('Houve um erro com seu e-mail ou senha');
    });
});
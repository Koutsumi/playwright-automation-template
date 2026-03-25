import { test, expect } from '@playwright/test';
import ProponentServices from '../../../../../../modules/proponent/index.ts';
import proponentsFixture from '../../../../../../fixtures/proponents.ts';
import { INaturalPerson } from '../../../../../../modules/proponent/repository/proponent.types.ts';
import { getUserData } from '../../../../../../shared/helpers/userId.ts';
import inserProponent from '../../../../../../shared/helpers/insertProponent.ts';
import generateCPF from '../../../../../../shared/helpers/generateCpf.ts';

const proponentData = proponentsFixture.naturalPerson("Natural Person BNP Playwright Test - Errors");
const cookiesPath = './.auth/cookies.userSingnupProponent.errors.json';
const userData = getUserData('./.auth/cookies.userSingnupProponent.duplicate.json');

test.describe('POST /proponent - natural person', async () => {

    test.use({ storageState: cookiesPath });
    test('Should not create a duplicate natural person proponent', async ({ request }) => {
        const cpf = generateCPF();

        proponentData.proponent.identification = {
            ...(proponentData.proponent.identification as INaturalPerson),
            CPF: cpf
        };

        await inserProponent(proponentData.proponent, userData!.userId);   

        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(400);
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe(`Proponent with document ${cpf} already exists.`);
    });



});

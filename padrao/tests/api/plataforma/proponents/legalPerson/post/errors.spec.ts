import { test, expect } from '@playwright/test';
import ProponentServices from '../../../../../../modules/proponent/index.ts';
import proponentsFixture from '../../../../../../fixtures/proponents.ts';
import { ILegalPerson } from '../../../../../../modules/proponent/repository/proponent.types.ts';
import { getUserData } from '../../../../../../shared/helpers/userId.ts';
import inserProponent from '../../../../../../shared/helpers/insertProponent.ts';
import generateCNPJ from '../../../../../../shared/helpers/generateCnpj.ts';

const proponentData = proponentsFixture.legalPerson("Legal Person BNP Playwright Test - Errors");
const cookiesPath = './.auth/cookies.userSingnupProponent.errors.json';
const userData = getUserData('./.auth/cookies.userSingnupProponent.duplicate.json');

test.describe('POST /proponent - legal person', async () => {

    test.use({ storageState: cookiesPath });
    test('Should not create a duplicate legal person proponent', async ({ request }) => {
        const cnpj = generateCNPJ();

        proponentData.proponent.identification = {
            ...(proponentData.proponent.identification as ILegalPerson),
            CNPJ: cnpj
        };

        await inserProponent(proponentData.proponent, userData!.userId);   

        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(400);
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe(`Proponent with document ${cnpj} already exists.`);
    });

});

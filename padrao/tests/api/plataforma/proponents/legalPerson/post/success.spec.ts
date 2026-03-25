import { test, expect } from '@playwright/test';
import ProponentServices from '../../../../../../modules/proponent/index.ts';
import proponentsFixture from '../../../../../../fixtures/proponents.ts';

const proponentData = proponentsFixture.legalPerson("Legal Person BNP Playwright Test - Success");
const cookiesPath = './.auth/cookies.userSingnupProponent.success.json';

test.describe('POST /proponent - legal person', async () => {
    test.use({ storageState: `${cookiesPath}` });
    test('Should create a new legal person proponent', async ({ request }) => {
        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(200);
        expect(STATUS).toBe('SUCCESS');
        expect(MESSAGE).toBe('Successfully created the proponent');
    });

});

import { test, expect } from '@playwright/test';
import ProponentServices from '../../../../../../modules/proponent/index.ts';
import proponentsFixture from '../../../../../../fixtures/proponents.ts';

const proponentData = proponentsFixture.collective("Collective BNP Playwright Test - Success");
const cookiesPath = './.auth/cookies.userSingnupProponent.success.json';

test.describe('POST /proponent - collective', async () => {
    test.use({ storageState: `${cookiesPath}` });
    test('Should create a new collective proponent', async ({ request }) => {
        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(200);
        expect(STATUS).toBe('SUCCESS');
        expect(MESSAGE).toBe('Successfully created the proponent');
    });

});

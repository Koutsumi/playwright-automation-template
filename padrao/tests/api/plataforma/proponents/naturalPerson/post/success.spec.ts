import { test, expect } from '@playwright/test';
import ProponentServices from '../../../../../../modules/proponent/index.ts';
import proponentsFixture from '../../../../../../fixtures/proponents.ts';
import { MongoActions } from '../../../../../../config/libs/db/mongoActions.ts';
import { ERoles } from '../../../../../../modules/auth/repository/enum/roles.enum.ts';
import { getUserData } from '../../../../../../shared/helpers/userId.ts';
import { ObjectId } from 'mongodb';

const mongoAction: MongoActions = new MongoActions();
const proponentData = proponentsFixture.naturalPerson("Natural Person BNP Playwright Test - Success");
const cookiesPath = './.auth/cookies.userSingnupProponent.success.json';
const usersData =  getUserData(cookiesPath);

test.describe('POST /proponent - natural person', async () => {
    test.use({ storageState: `${cookiesPath}` });
    test('Should create a new natural person proponent', async ({ request }) => {
        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(200);
        expect(STATUS).toBe('SUCCESS');
        expect(MESSAGE).toBe('Successfully created the proponent');

        const proponentUser = await mongoAction.findOne('users', {"_id": new ObjectId(usersData?.userId)});
        console.log(proponentUser);
 
        const roles = proponentUser!.roles;
        expect(roles).toContain(ERoles.proponent);
    });



});

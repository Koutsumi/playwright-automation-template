import { test, expect } from '@playwright/test';
import ProponentServices from '../../../../../modules/proponent/index.ts';
import proponentsFixture from '../../../../../fixtures/proponents.ts';
import { MongoActions } from '../../../../../config/libs/db/mongoActions.ts';
import { EPersonType } from '../../../../../modules/proponent/repository/enum/personType.enum.ts';
import { getUserData } from '../../../../../shared/helpers/userId.ts';
import insertProponent from '../../../../../shared/helpers/insertProponent.ts';
import { ObjectId } from 'mongodb';

const mongoAction: MongoActions = new MongoActions();
const proponentData = proponentsFixture.cooperative("Cooperative BNP Playwright Test - Success");
const proponentNaturalPersonData = proponentsFixture.naturalPerson("Playwright naturalPerson");
const cookiesPath = './.auth/cookies.userNaturalPerson.singnupCooperative.json';

test.describe('POST /proponent - cooperative', async () => {
    test.use({ storageState: `${cookiesPath}` });
    test('Should create a new cooperative proponent', async ({ request }) => {
        const userData = await getUserData(cookiesPath);

        if(userData){
            await insertProponent(proponentNaturalPersonData.proponent, userData.userId);

            const dbProponent = await mongoAction.findOne('proponents', { personType: EPersonType.naturalPerson, users :new ObjectId(userData.userId) });
        
            expect(dbProponent).not.toBeNull();
        }

        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(200);
        expect(STATUS).toBe('SUCCESS');
        expect(MESSAGE).toBe('Successfully created the proponent');
    });

});

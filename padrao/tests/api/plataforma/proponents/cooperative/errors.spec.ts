import { test, expect } from '@playwright/test';
import ProponentServices from '../../../../../modules/proponent/index.ts';
import proponentsFixture from '../../../../../fixtures/proponents.ts';
import { ILegalPerson } from '../../../../../modules/proponent/repository/proponent.types.ts';
import { MongoActions } from '../../../../../config/libs/db/mongoActions.ts';
import { getUserData } from '../../../../../shared/helpers/userId.ts';
import insertProponent from '../../../../../shared/helpers/insertProponent.ts';
import generateCNPJ from '../../../../../shared/helpers/generateCnpj.ts';
import { ObjectId } from 'mongodb';
import { EPersonType } from '../../../../../modules/proponent/repository/enum/personType.enum.ts';

const mongoAction: MongoActions = new MongoActions();
const proponentData = proponentsFixture.cooperative("Cooperative BNP Playwright Test - Errors");
const proponentNaturalPersonData = proponentsFixture.naturalPerson("NaturalPerson to Cooperative BNP Playwright Test - Errors");
const cookiesPath = './.auth/cookies.userSingnupProponent.errors.json';
const userData = getUserData(cookiesPath);
const cookiesUserDuplicatedProponent = './.auth/cookies.userSingnupProponent.duplicate.json';
const userDuplicatedProponentData = getUserData(cookiesUserDuplicatedProponent);

test.describe('POST /proponent - cooperative validation errors', async () => {

    test.use({ storageState: cookiesPath });
    test('Should not create a duplicate cooperative proponent', async ({ request }) => {
        const cnpj = generateCNPJ();

        proponentData.proponent.identification = {
            ...(proponentData.proponent.identification as ILegalPerson),
            CNPJ: cnpj
        };

        if (userDuplicatedProponentData){
            const userId = userDuplicatedProponentData.userId;
            await insertProponent(proponentData.proponent, userId);
            const dbCooperative = await mongoAction.findOne('proponents', { personType: EPersonType.cooperative, users :new ObjectId(userId) });
            expect(dbCooperative).not.toBeNull();
        }

        if(userData){
            const userId = userData.userId;
            await insertProponent(proponentNaturalPersonData.proponent, userId); 
            const dbNaturalPerson = await mongoAction.findOne('proponents', { personType: EPersonType.naturalPerson, users :new ObjectId(userId) });
            expect(dbNaturalPerson).not.toBeNull();
        }

        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(400);
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe(`Proponent with document ${cnpj} already exists.`);
    });

});

test.describe('POST /proponent - cooperative validation errors', async () => {
    // TODO criar um usuário para esse teste
    test.use({ storageState: cookiesUserDuplicatedProponent });

    test('Should not create a cooperative proponent when user does not have a natural person proponent', async ({ request }) => {
        const response = await ProponentServices.create(request, proponentData);

        const { STATUS, MESSAGE } = await response.json();
        expect(response.status()).toBe(400);
        expect(STATUS).toBe('FAILURE');
        expect(MESSAGE).toBe(`Before creating a proponent of type cooperative, it is necessary to have a proponent of type natural person already created.`);
    });

});

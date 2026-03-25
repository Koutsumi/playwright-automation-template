import { test as setup, request } from '@playwright/test';
import usersFixture from '../../../../fixtures/users.ts';
import { loginAndStoreSession } from "../../../../modules/auth/helpers/loginAndStoreSession";
import { ERoles } from '../../../../modules/auth/repository/enum/roles.enum.ts';
import { MongoActions } from '../../../../config/libs/db/mongoActions.ts';
import { ObjectId } from 'mongodb';

const identification = 'proponentsmodule';

let mongoAction: MongoActions = new MongoActions();

setup.beforeAll(async () => {
    const emailRegex = new RegExp(`user\\.[0-9a-f]+\\.${identification}\\.playwright@bnptests\\.com\\.br$`);
    const foundUsers = await mongoAction.find('users', { email: { $regex: emailRegex }});
    const userIds = foundUsers.map(user => new ObjectId(user._id));
    
    if(userIds.length > 0){
        const deletedProponents = await mongoAction.deleteMany('proponents', { users: { $in: userIds } });
        console.log(`Deleted ${deletedProponents} proponents from previous test runs.`);
        const deletedUsers = await mongoAction.deleteMany('users', { _id: { $in: userIds } });
        console.log(`Deleted ${deletedUsers} users from previous test runs.`);
    }
});

setup('Should log in as a user to sign up a proponent', async () => {

    const users = [
        {name: "Playwright success sing up a proponent", path: './.auth/cookies.userSingnupProponent.success.json', role: null},
        {name: "Playwright errors sing up a proponent", path: './.auth/cookies.userSingnupProponent.errors.json', role: null},
        {name: "Playwright duplicated a proponent", path: './.auth/cookies.userSingnupProponent.duplicate.json', role: ERoles.proponent},
        {name: "Playwirght naturalPerson to sing up a cooperative proponent", path: './.auth/cookies.userNaturalPerson.singnupCooperative.json', role: null},
    ]

    for (const u of users) {
        const user = usersFixture.user(identification,u.name, u.role);
        await loginAndStoreSession(request, user, u.path);
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
      
});
import { test as setup, request } from '@playwright/test';
import usersFixture from '../fixtures/users.ts';
import { MongoActions } from "../config/libs/db/mongoActions.ts";
import { loginAndStoreSession } from "../modules/auth/helpers/loginAndStoreSession"
import { ObjectId } from 'mongodb';

let mongoAction: MongoActions = new MongoActions();

const userAdmin = usersFixture.admin();

setup.beforeAll(async () => {
    const foundUsers = await mongoAction.find('users', { email: userAdmin.email});
    const userIds = foundUsers.map(user => new ObjectId(user._id));
    
    if(userIds.length > 0){
        const deletedProponents = await mongoAction.deleteMany('proponents', { users: { $in: userIds } });
        console.log(`Deleted ${deletedProponents} proponents from previous test runs.`);
        const deletedUsers = await mongoAction.deleteMany('users', { _id: { $in: userIds } });
        console.log(`Deleted ${deletedUsers} users from previous test runs.`);
    }
});

setup('Should login as admin', async () => {
    const COOKIES_PATH = './.auth/cookies.admin.json';

    await loginAndStoreSession(request, userAdmin, COOKIES_PATH);
});

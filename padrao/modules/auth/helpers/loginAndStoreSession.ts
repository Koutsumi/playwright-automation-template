import { APIRequest, expect } from "@playwright/test";
import { IUserData } from "../repository/user.types";
import AuthServices from '../index.ts';
import fs from 'node:fs';
import insertUser from "../../../shared/helpers/insertUser.ts";
import { saveUserId } from "../../../shared/helpers/userId.ts";

export async function loginAndStoreSession(request: APIRequest, user: IUserData, cookiesPath: string) : Promise<boolean> {
    const context = await request.newContext();

    await insertUser(user);

    const userData = {
        email: user.email,
        password: user.password,
    };

    console.log(`Logging in user ${user.email}...`);

    const response = await AuthServices.login(context, userData);
    expect(response.status()).toBe(200);

    const { STATUS, MESSAGE, DATA } = await response.json();
    expect(STATUS).toBe('SUCCESS');
    expect(MESSAGE).toBe('Success! You are logged in.');

    if (response.status() === 200) {
        const storageState = await context.storageState();
        fs.writeFileSync(cookiesPath, JSON.stringify(storageState, null, 2));

        // Salva ou atualiza o userId
        saveUserId(`${DATA.firstName} ${DATA.lastName}`, DATA.email, DATA._id, cookiesPath);

        await context.dispose();
        return true
    }
    await context.dispose();
    return false;
}
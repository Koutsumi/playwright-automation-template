import { IAuthenticationRequest } from './repository/auth.types';
import { APIRequestContext } from "@playwright/test"
import { headers } from '../../shared/headers.ts'
import dotenv from 'dotenv'
dotenv.config()

export default function login(request: APIRequestContext, user: IAuthenticationRequest) {
    
    const payload: IAuthenticationRequest = {
        email: user.email,
        password: user.password
    }
    
    const response = request.post(`${process.env.BASE_API_URL}/api/auth/login`, {
        data: payload,
        headers: headers
    });

    return response;

}
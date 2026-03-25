import { APIRequestContext } from "@playwright/test"
import { headers } from '../../shared/headers.ts'
import 'dotenv/config'

export default function forgot(request: APIRequestContext, email: string) {
    
    const response = request.post(`${process.env.BASE_API_URL}/api/auth/forgot`, {
        data: {email: email},
        headers: headers
    });

    return response;

}
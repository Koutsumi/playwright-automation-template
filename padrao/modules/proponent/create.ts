import { APIRequestContext } from "@playwright/test"
import { headers } from '../../shared/headers.ts'
import 'dotenv/config'
import { IProponentCreateRequest } from "./repository/proponent.types.ts"

export default function create(request: APIRequestContext, data: IProponentCreateRequest) {
    
    const response = request.post(`${process.env.BASE_API_URL}/api/proponent`, {
        data: data,
        headers: headers
    });

    return response;
}
import type { APIRequestContext } from '@playwright/test';
import 'dotenv/config';
import { headers } from '../../shared/headers';
import type { IAuthenticationRequest } from './repository/auth.types';

export default function login(request: APIRequestContext, user: IAuthenticationRequest) {
  return request.post(`${process.env.BASE_API_URL}/api/auth/login`, {
    data: user,
    headers,
  });
}

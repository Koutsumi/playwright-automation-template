import { ERoles } from "../modules/auth/repository/enum/roles.enum"
import { IUserData } from "../modules/auth/repository/user.types"
import { randomBytes } from 'node:crypto';

export default {
    user: function(identification: string, name : string, roles : ERoles | null = null){
        const data : IUserData = {
            email:`user.${randomBytes(8).toString('hex')}.${identification}.playwright@bnptests.com.br`,
            password:"test@123",
            name:name,
            role: roles
        }
        return data
    },

    admin: function(){
        const data : IUserData = {
            email:"admin.playwright@bnptests.com.br",
            password:"test@123",
            name:"Administrador Playwright",
            role: ERoles.admin
        }
        return data
    }
}
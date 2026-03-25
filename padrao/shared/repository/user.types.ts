import { ERoles } from "../../modules/auth/repository/enum/roles.enum"

export interface IInsertUser{
    profileImageURL: string | null,
    provider: string,
    roles: ERoles[],
    isMailChecked: boolean,
    firstName:string,
    lastName: string,
    email: string,
    annualCheckProponents: {
      wasChecked: boolean,
      date: Date
    },
    creationDate: Date,
    password: string,
    defaultProponent: null
}
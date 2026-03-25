import { ERoles } from "./enum/roles.enum";

export interface IUserData{
    email: string;
    password: string;
    name: string;
    role: ERoles | null;
}

export interface IUserCreationRequest{
    email: string,
    password: string
    name: string,
}

export interface IUser {
	_id?: string;
	email: string;
	firstName: string;
	lastName: string;
	profileImageURL?: string;
	creationDate?: Date;
	lastLogin?: Date;
	// provider local ou facebook etc etc
	provider: string;
	providerData?: unknown;
	additionalProvidersData?: unknown;

	roles: ERoles[]; // se eh um membro da secretaria ou membro de comissao ou proponente
	defaultProponent?: string;
	isMailChecked?: boolean;

	annualCheckProponents?: {
		wasChecked: boolean;
		date: Date;
	};
}

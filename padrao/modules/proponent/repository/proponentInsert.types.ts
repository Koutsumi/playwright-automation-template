import { ObjectId } from "mongodb";
import { IProponent } from "./proponent.types";

export interface IProponentDatabaseRecord extends Omit<IProponent, "creationUser" | "usersQueue" | "blockedUsers"> {
	_id?: string;

	creationUser: ObjectId;
	usersQueue: string[];
	blockedUsers: string[];

	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

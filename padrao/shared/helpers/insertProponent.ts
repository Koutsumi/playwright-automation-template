import { MongoActions } from "../../config/libs/db/mongoActions";
import { ObjectId } from "mongodb";
import { IProponent } from "../../modules/proponent/repository/proponent.types";
import { IProponentDatabaseRecord } from "../../modules/proponent/repository/proponentInsert.types";

let mongoAction: MongoActions = new MongoActions();

export default async function inserProponent(proponent: IProponent, userId: string) {

    console.log("USer ID:", userId);    

    const dataProponent: IProponentDatabaseRecord = {
        ...proponent,
        creationUser: new ObjectId(userId),
        users: [new ObjectId(userId)],
        usersQueue: [],
        blockedUsers: [],
        creationDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0
    };
    
    try{
        await mongoAction.insertOne('proponents', dataProponent);
        return true;
    }catch(error){
        console.error("Error inserting user:", error);
        throw error;
    }
    
}  
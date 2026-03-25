import bcrypt from "bcryptjs";
import { IUserData } from "../../modules/auth/repository/user.types";
import { IInsertUser } from "../repository/user.types";
import { MongoActions } from "../../config/libs/db/mongoActions";

let mongoAction: MongoActions = new MongoActions();

export default async function insertUser(user: IUserData) {

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const rolesArray = user.role ? [user.role] : [];

    const dataUser : IInsertUser = { 
        profileImageURL: null,
        provider: 'local',
        roles: rolesArray,
        isMailChecked: false,
        firstName:user.name,
        lastName: "Test",
        email: user.email,
        annualCheckProponents: {
          wasChecked: true,
          date: new Date()
        },
        creationDate: new Date(),
        password: hashedPassword,
        defaultProponent: null
    };

    try{
        await mongoAction.insertOne('users', dataUser);
        return true;
    }catch(error){
        console.error("Error inserting user:", error);
        throw error;
    }
    
}  
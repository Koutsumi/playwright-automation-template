import { MongoClient } from "mongodb";
import 'dotenv/config';

const uri = process.env.DB_URI;

let client: MongoClient;

export async function connectToDatabase() {
    try {
        if (!client) {
            client = new MongoClient(uri!);
            await client.connect();
        }
        return client.db(process.env.DB_NAME);
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw new Error("Falha na conexão com o banco de dados");
    }
}
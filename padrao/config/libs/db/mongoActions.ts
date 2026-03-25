import { connectToDatabase } from "./mongoClient";

export class MongoActions{
    // Insere um único registro em uma coleção.
    async insertOne(collectionName: string, data: object) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        return result.insertedId;
    }

    // Insere múltiplos registros em uma coleção.
    async insertMany(collectionName: string, data: object[]) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.insertMany(data);
        return result.insertedIds;
    }

    // Atualiza um único registro baseado em um filtro.
    async updateOne(collectionName: string, filter: object, update: object) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.updateOne(filter, update);
        return result.modifiedCount;
    }

    // Atualiza múltiplos registros baseado em um filtro.
    async updateMany(collectionName: string, filter: object, update: object) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.updateMany(filter, update);
        return result.modifiedCount;
    }

    // Exclui um único registro baseado em um filtro.
    async deleteOne(collectionName: string, filter: object) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne(filter);
        return result.deletedCount;
    }

    // Exclui múltiplos registros baseado em um filtro.
    async deleteMany(collectionName: string, filter: object) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.deleteMany(filter);
        return result.deletedCount;
    }

    // Retorna todos os registros que correspondem a um filtro.
    async find(collectionName: string, filter: object) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const cursor = collection.find(filter);
        const results = await cursor.toArray();
        return results;
    }

    // Retorna um único registro que corresponde a um filtro.
    async findOne(collectionName: string, filter: object) {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.findOne(filter);
        return result;
    }
}



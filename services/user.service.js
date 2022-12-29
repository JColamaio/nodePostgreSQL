import { getConnection } from "../libs/postgres";

class UserService {
    constructor(){}

    async create(data){
        return data;
    }

    async find(data){
    const client = await getConnection();
    const res = await client.query('SELECT * FROM tasks');
    return res.rows;
    
    }

    async findOne(id){
        return { id };
    }

    async update(id,changes){
       return {
        id,
        changes,
    };
}
}
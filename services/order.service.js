
class OrderService {
    constructor(){}

    async create(data){
        return data;
    }

    async find(){
        return [];
    }

    async findOne(id){
        return {id};
    }

    async update(id, changes){
        return {
            id,
            changes,
        };
    }

    async detele(id){
        return { id }
    }
}

module.exports = OrderService
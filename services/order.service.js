const { ReadyForQueryMessage } = require('pg-protocol/dist/messages');
const boom = require('@hapi/boom')
const pool = require('../libs/postgres.pool')
class OrderService {
    constructor(){
      this.orders = [];
      this.pool = pool;
      this.pool.on('error', (err) => console.log(err))
    }

    async create(data){
        return data;
    }

    async find(){
      const query = 'SELECT * FROM tasks';
      const rta = await this.pool.query(query);
      return rta.rows
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

const boom = require('@hapi/boom')
const pool = require('../libs/postgres.pool')

class CategoryService {

    constructor(){
      this.categories = [];
      this.pool = pool;
      this.pool.on('error', (err) => console.error(err))
    }

    async create(data){
        return data;
    }

    async find(){
      const query = 'SELECT * FROM tasks';
      const rta = await this.pool.query(query);
      return rta.rows;
    }

    async findOne(id){
        return { id };
    }

    async update(id, changes){
        return {
            id,
            changes,
        }
    }
}

module.exports = CategoryService

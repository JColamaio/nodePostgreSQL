const boom = require('@hapi/boom')
// const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool')

const { models } = require('../libs/sequelize')

class UserService {
    constructor(){
      this.users = [];
      this.pool = pool;
      this.pool.on('error', (err) => console.error(err))
    }

    async create(data){
        return data;
    }

    async find(){
      const rta = await models.User.findAll();
      return rta;
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

module.exports = UserService;

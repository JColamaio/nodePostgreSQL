const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor(){}

  async find() {
    const rta = await models.Customer.findAll();
  }
}

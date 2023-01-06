// here we'll have all the setup.
const { User, UserSchema } = require('./user.model')
const { Customer, customerSchema } = require('./customer.model')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
}

module.exports = { setupModels };

'use strict';
// by setting up migrations, we can be sure that the tables won't be substituted or removed
// since .sync() aint the best way to handle db modifications on production.
const {UserSchema, USER_TABLE} = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role')
  }
};

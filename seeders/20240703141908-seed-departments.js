'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departments', [
      {
        department_name: 'HR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        department_name: 'Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Departments', null, {});
  }
};

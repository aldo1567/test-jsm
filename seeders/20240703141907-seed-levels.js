'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Levels', [
      {
        level_name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_name: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
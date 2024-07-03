'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserProfiles', [
      {
        user_id: 1, // Admin
        first_name: 'Admin',
        last_name: 'User',
        address: '123 Admin St',
        phone_number: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2, // User
        first_name: 'Regular',
        last_name: 'User',
        address: '456 User Rd',
        phone_number: '987-654-3210',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserProfiles', null, {});
  }
};

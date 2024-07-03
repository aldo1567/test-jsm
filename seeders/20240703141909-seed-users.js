'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('password123', 10);
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: password,
        email: "admin@email.co",
        level_id: 1, // Admin
        department_id: 1, // HR
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user',
        password: password,
        email: "user@email.co",
        level_id: 2, // User
        department_id: 2, // Engineering
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

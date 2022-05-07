'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tickets', [
      {
        type: 'flight',
        date: new Date(2022, 11, 23),
        user_id: 1,
        aircraft_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'space flight',
        date: new Date(2022, 6, 20),
        user_id: 1,
        rocket_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', null, {})
  }
};

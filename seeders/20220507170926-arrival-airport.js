'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('arrival_airport', null, {})

    await queryInterface.bulkInsert('arrival_airport', [
      {
        ticket_id: 1,
        airport_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('arrival_airport', null, {})
  }
};

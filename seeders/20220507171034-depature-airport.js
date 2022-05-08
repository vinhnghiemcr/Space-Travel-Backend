'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departure_airport', null, {})

    await queryInterface.bulkInsert('departure_airport', [
      {
        ticket_id: 1,
        airport_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departure_airport', null, {})
  }
};

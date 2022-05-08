'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departure_planet', null, {})

    await queryInterface.bulkInsert('departure_planet', [
      {
        ticket_id: 2,
        planet_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departure_planet', null, {})
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('arrival_planet', null, {})

    await queryInterface.bulkInsert('arrival_planet', [
      {
        ticket_id: 2,
        planet_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('arrival_planet', null, {})
  }
};

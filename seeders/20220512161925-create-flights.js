'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flights', [
      {
        capacity: 100,
        date: new Date(2022, 11, 23, 12, 0),
        aircraft_id: 1,
        departure_airport_id: 1,
        arrival_airport_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 100,
        date: new Date(2022, 5, 16, 8, 0),
        aircraft_id: 1,
        departure_airport_id: 1,
        arrival_airport_id: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flights', null, {})
  }
};

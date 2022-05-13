'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flights', [
      {
        capacity: 100,
        type: 'flight',
        date: '2022-05-16',
        time: '08:30',
        price: 300,
        aircraft_id: 1,
        departure_airport_id: 1,
        arrival_airport_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 100,
        type: 'flight',
        date: '2022-05-16',
        time: '11:30',
        price: 500,
        aircraft_id: 1,
        departure_airport_id: 1,
        arrival_airport_id: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 10,
        type: 'space flight',
        date: '2022-05-16',
        time: '12:00',
        price: 1100000,
        aircraft_id: 1,
        departure_planet_id: 1,
        arrival_planet_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 30,
        type: 'space flight',
        date: '2022-05-16',
        time: '08:30',
        price: 3000000,
        aircraft_id: 1,
        departure_planet_id: 4,
        arrival_planet_id: 1,        
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flights', null, {})
  }
};

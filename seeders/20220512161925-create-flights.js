'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flights', [
      {
        capacity: 100,
        type: 'flight',
        date: '2022-05-16',
        time: '08:30AM',
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
        time: '11:30AM',
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
        time: '12:00AM',
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
        time: '08:30AM',
        price: 3000000,
        aircraft_id: 1,
        departure_planet_id: 4,
        arrival_planet_id: 1,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 200,
        type: 'flight',
        date: '2022-05-16',
        time: '08:30AM',
        price: 300,
        aircraft_id: 8,
        departure_airport_id: 1,
        arrival_airport_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 2,
        type: 'flight',
        date: '2022-05-16',
        time: '11:30AM',
        price: 5000,
        aircraft_id: 5,
        departure_airport_id: 2,
        arrival_airport_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 170,
        type: 'flight',
        date: '2022-05-16',
        time: '11:30AM',
        price: 500,
        aircraft_id: 1,
        departure_airport_id: 3,
        arrival_airport_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 10,
        type: 'flight',
        date: '2022-05-16',
        time: '11:30AM',
        price: 475,
        aircraft_id: 2,
        departure_airport_id: 4,
        arrival_airport_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 12,
        type: 'space flight',
        date: '2022-05-16',
        time: '12:00AM',
        price: 1100000,
        aircraft_id: 11,
        departure_planet_id: 1,
        arrival_planet_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 30,
        type: 'space flight',
        date: '2022-05-16',
        time: '08:30AM',
        price: 3000000,
        aircraft_id: 12,
        departure_planet_id: 4,
        arrival_planet_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        capacity: 30,
        type: 'space flight',
        date: '2022-05-16',
        time: '08:30AM',
        price: 3000000,
        aircraft_id: 13,
        departure_planet_id: 3,
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

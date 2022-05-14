'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', null, {})

    await queryInterface.bulkInsert('tickets', [
      {
        type: 'flight',
        passenger: '{"fname": "Nghiem", "lname": "Truong", "dob": "2000-01-01"}',
        qr: null,
        user_id: 1,
        flight_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'space flight',
        passenger: '{"fname": "Nghiem", "lname": "Truong", "dob": "2000-01-01"}',
        qr: null,
        user_id: 1,
        flight_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', null, {})
  }
};

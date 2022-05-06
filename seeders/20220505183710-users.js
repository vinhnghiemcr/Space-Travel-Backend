'use strict';
const middleware = require('../middleware')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})

     const nghiem = await middleware.hashPassword('nghiem')
     const jenna = await middleware.hashPassword('jenna')
     const molly = await middleware.hashPassword('molly')

     await queryInterface.bulkInsert('users',[
      {
        email: 'nghiem@nghiem.com',
        fname: 'Nghiem',
        lname: 'Truong',
        passwordDigest: nghiem,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jenna@jenna.com',
        fname: 'Jenna',
        lname: 'Leopold',
        passwordDigest: jenna,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'molly@molly.com',
        fname: 'Molly',
        lname: 'Obermeier',
        passwordDigest: molly,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};

'use strict';
const axios = require("axios")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aircrafts', null, {});
    await queryInterface.bulkInsert('aircrafts', [
      {
        name: '747-8',
        type: 'BOEING',
        img: 'https://www.aviationmegastore.com/img/prod/full/8/9/159051_0.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '737 MAX 10',
        type: 'BOEING',
        img: 'https://theaircurrent.com/wp-content/uploads/2018/08/737-max-10-landing-gear-rotation.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])    

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('aircrafts', null, {});
    
  }
};

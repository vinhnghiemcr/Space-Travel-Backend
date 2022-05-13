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
      },
      {
        name: '747-8',
        type: 'Passenger Airliner',
        img: 'https://www.aviationmegastore.com/img/prod/full/8/9/159051_0.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '737 MAX 10',
        type: 'Private Jet',
        img: 'https://i.insider.com/573b595152bcd063018c375a',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SR 71',
        type: 'Airplane',
        img: 'https://jooinn.com/images/sr-71-3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'EC 135',
        type: 'Helicopter',
        img: 'https://www.lynchburg.edu/wp-content/uploads/helicopter.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'U2 Spy Plane',
        type: 'Glider',
        img: 'https://www.inceptivemind.com/wp-content/uploads/2020/04/U-2-Spy-plane.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Modified 747',
        type: 'Boeing Cargo',
        img: 'https://i.insider.com/5e8205dd2d41c122491faa23',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])    

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('aircrafts', null, {});
    
  }
};

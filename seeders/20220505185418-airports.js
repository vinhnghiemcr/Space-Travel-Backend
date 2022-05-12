'use strict';
const axios = require("axios")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airports', null, {})
    const airportList = 'SAT,DCA,PHX,LAX'
    
    const res = await axios.get(`https://api.aviationapi.com/v1/airports?apt=${airportList}`)
    const data = res.data
    const airports = Object.keys(data).map( (i) => ({      
      name : data[i][0].facility_name,
      code : data[i][0].faa_ident,
      location: data[i][0].city + ', ' + data[i][0].state_full,
      latitude: data[i][0].latitude_sec,
      longtitude: data[i][0].longitude_sec,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('airports', airports)
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('airports', null, {})
  }
};

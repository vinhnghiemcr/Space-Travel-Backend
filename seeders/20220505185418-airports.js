'use strict';
const axios = require("axios")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airports', null, {})
    const airportList = 'ATL,DFW,DEN,ORD,LAX,CLT,LAS,PHX,MCO,SEA,MIA,IAH,JFK,FLL,EWR,SFO,MSP,DTW,BOS,SLC,PHL,BWI,TPA,SAN,MDW,LGA,BNA,IAD,ALC,ABQ,ASP,ALA,LEI,AOR,APN,ACH,ASE,ASU,AHN,ATL,ACY,AGS,AUS,RAR,AYQ,BCD,BJZ,ASM,YEK,ARH,BSL,BZL,BAU,BPT,EIS,BJS,BEL,BFS,BHD,CNF,BEY'
    
    const res = await axios.get(`https://api.aviationapi.com/v1/airports?apt=${airportList}`)
    const data = res.data
    const airports = Object.keys(data).map( (i) => ({      
      name : data[i][0].facility_name,
      code : data[i][0].faa_ident,
      city: data[i][0].city,
      state: data[i][0].state,
      state_full: data[i][0].state_full,
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

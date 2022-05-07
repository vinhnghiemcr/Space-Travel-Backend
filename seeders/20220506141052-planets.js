'use strict';
const axios = require("axios")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planets', null, {})

    const res = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies`)
    const planets = res.data.bodies.filter((planet) => planet.isPlanet)
                    .map((planet) => ({
                      name: planet.englishName,
                      code: planet.id,
                      img: null,
                      createdAt: new Date(),
                      updatedAt: new Date()
                    }))
    await queryInterface.bulkInsert('planets', planets)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planets', null, {})
  }
};

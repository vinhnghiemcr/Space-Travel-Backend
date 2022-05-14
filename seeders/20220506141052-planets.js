'use strict';
const axios = require("axios")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planets', null, {})
    const models = [
      'https://solarsystem.nasa.gov/gltf_embed/2344',
      'https://solarsystem.nasa.gov/gltf_embed/2364',
      'https://solarsystem.nasa.gov/gltf_embed/2375',
      'https://solarsystem.nasa.gov/gltf_embed/2372',
      'https://solarsystem.nasa.gov/gltf_embed/2369',
      'https://solarsystem.nasa.gov/gltf_embed/2355',
      'https://solarsystem.nasa.gov/gltf_embed/2393',
      'https://solarsystem.nasa.gov/gltf_embed/2343'
    ]
    const res = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies`)
    const planets = res.data.bodies.filter((planet) => planet.isPlanet)
                    .map((planet) => ({
                      name: planet.englishName,
                      code: planet.id,
                      img: null,
                      createdAt: new Date(),
                      updatedAt: new Date()
                    }))
    planets.forEach((planet, i) => planet.img = models[i])
    await queryInterface.bulkInsert('planets', planets)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planets', null, {})
  }
};

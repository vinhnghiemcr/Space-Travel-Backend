'use strict';
const axios = require("axios")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rockets', null, {})

    const res = await axios.get(`https://api.spacexdata.com/v3/rockets`)
    const rockets = res.data.map((rocket) => ({
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      img: rocket.flickr_images,
      cost_per_launch: rocket.cost_per_launch,
      discription: rocket.description,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('rockets', rockets)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rockets', null, {})
  }
};

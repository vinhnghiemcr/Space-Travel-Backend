'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('rockets', 'cost_per_launch', {type: Sequelize.INTEGER    })
    await queryInterface.addColumn('rockets', 'discription', { type: Sequelize.TEXT} )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('rockets', 'cost_per_launch')
     await queryInterface.removeColumn('rockets', 'discription')
  }
};

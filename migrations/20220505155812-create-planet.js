'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('planets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      num_of_moons: {
        type: Sequelize.INTEGER
      },
      density: {
        type: Sequelize.FLOAT
      },
      gravity: {
        type: Sequelize.FLOAT
      },
      equaRadius: {
        type: Sequelize.INTEGER
      },
      avgTemp: {
        type: Sequelize.INTEGER
      },
      mass: {
        type: Sequelize.JSON
      },
      vol: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('planets');
  }
};
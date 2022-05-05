'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'user_id',
      },
      aircraftId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'aircraft_id',
      },
      rocketId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'rocket_id',
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
    await queryInterface.dropTable('tickets');
  }
};
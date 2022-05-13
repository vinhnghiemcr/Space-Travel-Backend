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
      passenger: {
        type: Sequelize.JSON
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      flightId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'flight_id',
        references: {
          model: 'flights',
          key: 'id'
        }
      }, 
      aircraftId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'aircraft_id',
        references: {
          model: 'aircrafts',
          key: 'id'
        }
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
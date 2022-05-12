'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      aircraftId: {
        type: Sequelize.INTEGER,
        field: 'aircraft_id',
        onDelete: 'CASCADE',
        references: {
          model: 'aircrafts',
          key: 'id'
        }
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        field: 'departure_airport_id',
        onDelete: 'CASCADE',
        references: {
          model: 'airports',
          key: 'id'
        }
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        field: 'arrival_airport_id',
        onDelete: 'CASCADE',
        references: {
          model: 'airports',
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
    await queryInterface.dropTable('flights');
  }
};
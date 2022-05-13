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
        type: Sequelize.DATEONLY
      },
      time: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
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
      rocketId: {
        type: Sequelize.INTEGER,
        field: 'rocket_id',
        onDelete: 'CASCADE',
        references: {
          model: 'rockets',
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
      departurePlanetId: {
        type: Sequelize.INTEGER,
        field: 'departure_planet_id',
        onDelete: 'CASCADE',
        references: {
          model: 'planets',
          key: 'id'
        }
      },
      arrivalPlanetId: {
        type: Sequelize.INTEGER,
        field: 'arrival_planet_id',
        onDelete: 'CASCADE',
        references: {
          model: 'planets',
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
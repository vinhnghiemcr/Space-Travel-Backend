'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArrivalAirports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketId: {
        type: Sequelize.INTEGER,
        field: 'ticket_id',
        onDelete: 'CASCADE',
        references: {
          model: 'tickets',
          key: 'id'
        }
      },
      airportId: {
        type: Sequelize.INTEGER,
        field: 'airport_id',
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
    await queryInterface.dropTable('ArrivalAirports');
  }
};
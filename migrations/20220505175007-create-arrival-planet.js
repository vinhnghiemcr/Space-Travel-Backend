'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('arival_planet', {
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
      planetId: {
        type: Sequelize.INTEGER,
        field: 'planet_id',
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
    await queryInterface.dropTable('arival_planet');
  }
};
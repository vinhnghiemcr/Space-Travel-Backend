'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketPlanet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TicketPlanet.init({
    ticketId: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TicketPlanet',
    tableName: 'ticket_planet'
  });
  return TicketPlanet;
};
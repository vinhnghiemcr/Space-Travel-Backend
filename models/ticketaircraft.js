'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketAircraft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TicketAircraft.init({
    ticketId: DataTypes.INTEGER,
    aircraftId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TicketAircraft',
  });
  return TicketAircraft;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArrivalAirport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArrivalAirport.init({
    ticketId: DataTypes.INTEGER,
    airportId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArrivalAirport',
  });
  return ArrivalAirport;
};
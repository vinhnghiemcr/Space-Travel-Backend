'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsToMany(models.Ticket, {
        as: 'departure',
        through: 'DepartureAirport',
        foreignKey: 'airportId'
      })
      Airport.belongsToMany(models.Ticket, {
        as: 'arrival',
        through: 'ArrivalAirport',
        foreignKey: 'airportId'
      })
    }
  }
  Airport.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    img: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    state_full: DataTypes.STRING,
    manager: DataTypes.STRING,
    managerPhone: DataTypes.STRING,
    elevation: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longtitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airport',
    tableName: 'airports'
  });
  return Airport;
};
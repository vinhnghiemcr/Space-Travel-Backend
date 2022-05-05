'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArrivalPlanet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArrivalPlanet.init({
    ticketId: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArrivalPlanet',
  });
  return ArrivalPlanet;
};
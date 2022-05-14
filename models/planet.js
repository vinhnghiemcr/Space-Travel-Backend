'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Planet.belongsToMany(models.Ticket, {
        as: 'departure',
        through: 'DeparturePlanet',
        foreignKey: 'planetId'
      })
      Planet.belongsToMany(models.Ticket, {
        as: 'arrival',
        through: 'ArrivalPlanet',
        foreignKey: 'planetId'
      })
    }
  }
  Planet.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    img: DataTypes.STRING,
    num_of_moons: DataTypes.INTEGER,
    density: DataTypes.FLOAT,
    gravity: DataTypes.FLOAT,
    equaRadius: DataTypes.INTEGER,
    avgTemp: DataTypes.INTEGER,
    mass: DataTypes.JSON,
    vol: DataTypes.JSON,

  }, {
    sequelize,
    modelName: 'Planet',
    tableName: 'planets'
  });
  return Planet;
};
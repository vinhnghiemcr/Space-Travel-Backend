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
    ticketId: {
      type: DataTypes.INTEGER,
      field: 'ticket_id',
      onDelete: 'CASCADE',
      references: {
        model: 'tickets',
        key: 'id'
      }
    },
    planetId: {
      type: DataTypes.INTEGER,
      field: 'planet_id',
      onDelete: 'CASCADE',
      references: {
        model: 'planets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ArrivalPlanet',
    tableName: 'arrival_planet'
  });
  return ArrivalPlanet;
};
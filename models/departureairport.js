'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DepartureAirport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DepartureAirport.init({
    ticketId: {
      type: DataTypes.INTEGER,
      field: 'ticket_id',
      onDelete: 'CASCADE',
      references: {
        model: 'tickets',
        key: 'id'
      }
    },
    airportId: {
      type: DataTypes.INTEGER,
      field: 'airport_id',
      onDelete: 'CASCADE',
      references: {
        model: 'airports',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'DepartureAirport',
  });
  return DepartureAirport;
};
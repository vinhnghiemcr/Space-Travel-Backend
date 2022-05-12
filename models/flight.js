'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flight.belongsTo(models.Airport, {as: 'departure_airport', foreignKey: 'departure_airport_id'} )
      Flight.belongsTo(models.Airport, {as: 'arrival_airport', foreignKey: 'arrival_airport_id'} )
      Flight.belongsTo(models.Aircraft, {as: 'aircraft', foreignKey: 'aircraft_id'} )
      // Flight.hasMany(models.Ticket, {as: 'tickes', foreignKey: 'flight_id'} )
    }
  }
  Flight.init({
    capacity: DataTypes.INTEGER,
    date: DataTypes.DATE,
    aircraftId: {
      type: DataTypes.INTEGER,
      field: 'aircraft_id',
      onDelete: 'CASCADE',
      references: {
        model: 'aircrafts',
        key: 'id'
      }
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      field: 'departure_airport_id',
      onDelete: 'CASCADE',
      references: {
        model: 'airports',
        key: 'id'
      }
    },
    arrivalAirportId: {
      type: DataTypes.INTEGER,
      field: 'arrival_airport_id',
      onDelete: 'CASCADE',
      references: {
        model: 'airports',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Flight',
    tableName: 'flights'
  });
  return Flight;
};
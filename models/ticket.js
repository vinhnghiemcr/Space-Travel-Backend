'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.User, { as: 'passenger', foreignKey: 'user_idd' })
      Ticket.belongsTo(models.Aircraft, {as: 'aircraft', foreignKey: 'aircraft_id'})
      Ticket.belongsTo(models.Rocket, {as: 'rocket', foreignKey: 'rocket_id'})
      Ticket.belongsToMany(models.Airport, {
        as: 'departureAirport',
        through: 'DepartureAirport',
        foreignKey: 'ticketId'
      })
      Ticket.belongsToMany(models.Planet, {
        as: 'departurePlanet',
        through: 'DeparturePlanet',
        foreignKey: 'ticketId'
      })
      Ticket.belongsToMany(models.Airport, {
        as: 'arrivalAirport',
        through: 'ArrivalAirport',
        foreignKey: 'ticketId'
      })
      Ticket.belongsToMany(models.Planet, {
        as: 'arrivalPlanet',
        through: 'ArrivalPlanet',
        foreignKey: 'ticketId'
      })
    }
  }
  Ticket.init({
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    vehicle: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'user_id',
    },
    aircraftId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'aircraft_id',
    },
    rocketId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'rocket_id',
    }
  }, {
    sequelize,
    modelName: 'Ticket',
    tableName: 'tickets'
  });
  return Ticket;
};
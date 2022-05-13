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
      Ticket.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' })
      Ticket.belongsTo(models.Flight, {as: 'flight', foreignKey: 'flight_id'})
      
    }
  }
  Ticket.init({
    type: DataTypes.STRING,
    passenger: DataTypes.JSON,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    flightId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'flight_id',
      references: {
        model: 'flights',
        key: 'id'
      }
    },
    aircraftId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'aircraft_id',
      references: {
        model: 'aircrafts',
        key: 'id'
      }
    }
    
  }, {
    sequelize,
    modelName: 'Ticket',
    tableName: 'tickets'
  });
  return Ticket;
};
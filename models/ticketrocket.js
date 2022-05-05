'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketRocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TicketRocket.init({
    ticketId: DataTypes.INTEGER,
    rocketId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TicketRocket',
  });
  return TicketRocket;
};
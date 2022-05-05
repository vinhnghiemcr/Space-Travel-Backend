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
      Ticket.belongsTo(models.User, { as: 'passenger', foreignKey: 'userId' })
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
      references: {
        model: 'medium_users',
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
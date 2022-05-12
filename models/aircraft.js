'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aircraft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aircraft.hasMany(models.Ticket, {as: 'tickets', foreignKey: 'aircraft_id'})
      Aircraft.hasMany(models.Flight, {as: 'flights', foreignKey: 'aircraft_id'})
    }
  }
  Aircraft.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aircraft',
    tableName: 'aircrafts'
  });
  return Aircraft;
};
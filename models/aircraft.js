'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aircraft extends Model {
    
    static associate(models) {
      
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
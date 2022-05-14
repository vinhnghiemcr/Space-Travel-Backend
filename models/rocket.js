'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rocket extends Model {
    
    static associate(models) {
      // define association here
      Rocket.hasMany(models.Ticket, {as: 'tickets', foreignKey: 'aircraft_id'})
    }
  }
  Rocket.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    img: DataTypes.ARRAY(DataTypes.STRING), 
    costPerLaunch: {
      type: DataTypes.INTEGER,
      field: 'cost_per_launch'
    }
      ,
    discription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Rocket',
    tableName: 'rockets'
  });
  return Rocket;
};
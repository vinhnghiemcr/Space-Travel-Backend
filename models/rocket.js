'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aircraft.hasMany(models.Ticket, {as: 'tickets', foreignKey: 'aircraft_id'})
    }
  }
  Rocket.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    img: DataTypes.STRING, 
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
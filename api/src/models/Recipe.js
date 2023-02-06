const { DataTypes } = require('sequelize');
const { conn } = require('../db.js')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platillo: {
      type: DataTypes.STRING,

    },
    h_score: {
      type: DataTypes.INTEGER,

    },
    steps: {
      type: DataTypes.STRING,
      
    }
  });
};
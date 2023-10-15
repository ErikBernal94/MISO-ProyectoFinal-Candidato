const { DataTypes } = require('sequelize');
const sequelize = require("./db")

const usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_completo: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    contrasena: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'usuarios',
    timestamps: false,
    schema: 'registro'
  });

module.exports = usuario;
const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const informacionAcademica = sequelize.define('informacionAcademica', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_candidato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    institucion: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    en_curso: {
        type: DataTypes.BOOLEAN
    }
  }, {
    tableName: 'informacion_academica',
    timestamps: false,
    schema: 'candidato'
  });

  module.exports = informacionAcademica;
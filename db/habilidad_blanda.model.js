const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const habilidad_blanda = sequelize.define('habilidadBlanda', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'habilidad_blanda',
    timestamps: false,
    schema: 'metadata'
});

const habilidad_blanda_candidato = sequelize.define('habilidadBlandaCandidato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_candidato: {
        type: DataTypes.STRING
    },
    id_habilidad_blanda: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'habilidad_blanda_candidato',
    timestamps: false,
    schema: 'candidato'
});

module.exports = { habilidad_blanda ,habilidad_blanda_candidato };
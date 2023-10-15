const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const habilidad_tecnica = sequelize.define('habilidadTecnica', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'habilidad_tecnica',
    timestamps: false,
    schema: 'metadata'
});

const habilidad_tecnica_candidato = sequelize.define('habilidadTecnicaCandidato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_candidato: {
        type: DataTypes.STRING
    },
    id_habilidad_tecnica: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'habilidad_tecnica_candidato',
    timestamps: false,
    schema: 'candidato'
});

module.exports = { habilidad_tecnica , habilidad_tecnica_candidato };
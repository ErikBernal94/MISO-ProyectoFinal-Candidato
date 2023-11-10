const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const idioma = sequelize.define('idioma', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idioma: {
        type: DataTypes.STRING
    },
    idioma_en: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'idioma',
    timestamps: false,
    schema: 'metadata'
});

const idioma_candidato = sequelize.define('idiomaCandidato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_candidato: {
        type: DataTypes.STRING
    },
    id_idioma: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'idioma_candidato',
    timestamps: false,
    schema: 'candidato'
});

module.exports = { idioma,idioma_candidato };

const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const usuario = require('./usuario.model');


const entrevista = sequelize.define('entrevista', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    asunto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE
    },
    hora_inicio: {
        type: DataTypes.TIME
    },
    hora_fin: {
        type: DataTypes.TIME
    },
    activa: {
        type: DataTypes.BOOLEAN
    }
  }, {
    tableName: 'entrevista',
    timestamps: false,
    schema: 'candidato'
  });

  const entrevista_usuario = sequelize.define('entrevistaUsuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_entrevista: {
        type: DataTypes.INTEGER
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    resultados:{
      type: DataTypes.STRING
    }
    }, {
    tableName: 'entrevista_usuario',
    timestamps: false,
    schema: 'candidato'
});

  entrevista.belongsToMany(usuario, {
    through: 'entrevistaUsuario',
    foreignKey: 'id_entrevista',
    otherKey: 'id_usuario'
  });
  usuario.belongsToMany(entrevista, {
    through: 'entrevistaUsuario',
    foreignKey: 'id_usuario',
    otherKey: 'id_entrevista'
  });

module.exports = { entrevista, entrevista_usuario};
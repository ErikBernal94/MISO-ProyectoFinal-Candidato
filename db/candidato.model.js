const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const { experiencia } = require('./experiencia.model');
const { habilidad_blanda } = require('./habilidad_blanda.model');
const { habilidad_tecnica } = require('./habilidad_tecnica.model');
const { idioma } = require('./idioma.model');
const informacionAcademica = require('./info_academica.model');
const { pais } = require('./pais.model');
const usuario = require('./usuario.model');


const candidato = sequelize.define('candidato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    edad: {
        type: DataTypes.INTEGER
    },
    numero_telefono: {
        type: DataTypes.STRING
    },
    id_pais: {
        type: DataTypes.STRING
    },
    id_usuario: {
        type: DataTypes.INTEGER
    }
  }, {
    tableName: 'candidato',
    timestamps: false,
    schema: 'candidato'
  });

  usuario.hasOne(candidato, {foreignKey: 'id_usuario'});
  candidato.belongsTo(usuario, {foreignKey: 'id_usuario'});
  pais.hasOne(candidato, {foreignKey: 'id_pais', as: 'paisOrigen'});
  candidato.belongsTo(pais, {foreignKey: 'id_pais', as: 'paisOrigen'});
  candidato.hasMany(informacionAcademica, {as:'informacionAcademica', foreignKey: 'id_candidato'});
  informacionAcademica.belongsTo(candidato, {as:'informacionAcademica', foreignKey: 'id_candidato'});
  candidato.hasMany(experiencia, {foreignKey: 'id_candidato'});
  experiencia.belongsTo(candidato, {foreignKey: 'id_candidato'});
  candidato.belongsToMany(habilidad_blanda, {
    through: 'habilidadBlandaCandidato',
    foreignKey: 'id_candidato',
    otherKey: 'id_habilidad_blanda',
    as: 'habilidadesBlandas'
  });
  habilidad_blanda.belongsToMany(candidato, {
    through: 'habilidadBlandaCandidato',
    foreignKey: 'id_habilidad_blanda',
    otherKey: 'id_candidato'
  });
  candidato.belongsToMany(habilidad_tecnica, {
    through: 'habilidadTecnicaCandidato',
    foreignKey: 'id_candidato',
    otherKey: 'id_habilidad_tecnica',
    as: 'habilidadesTecnicas'
  });
  habilidad_tecnica.belongsToMany(candidato, {
    through: 'habilidadTecnicaCandidato',
    foreignKey: 'id_habilidad_tecnica',
    otherKey: 'id_candidato'
  });
  candidato.belongsToMany(idioma, {
    through: 'idiomaCandidato',
    foreignKey: 'id_candidato',
    otherKey: 'id_idioma'
  });
  idioma.belongsToMany(candidato, {
    through: 'idiomaCandidato',
    foreignKey: 'id_idioma',
    otherKey: 'id_candidato'
  });

  module.exports = candidato;
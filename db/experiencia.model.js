const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const experiencia = sequelize.define('experiencia', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_candidato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre_empresa: {
        type: DataTypes.STRING
    },
    id_rol: {
        type: DataTypes.INTEGER
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    actual: {
        type: DataTypes.BOOLEAN
    },
    descripcion_actividades: {
        type: DataTypes.TEXT
    }
  }, {
    tableName: 'informacion_experiencia',
    timestamps: false,
    schema: 'candidato'
  });

  const rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rol: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'rol',
    timestamps: false,
    schema: 'metadata'
});

rol.hasOne(experiencia, {foreignKey: 'id_rol'});
experiencia.belongsTo(rol, {foreignKey: 'id_rol'});

module.exports = {experiencia, rol};
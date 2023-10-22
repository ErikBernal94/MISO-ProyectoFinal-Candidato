const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const pais = sequelize.define('pais', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pais: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'pais',
    timestamps: false,
    schema: 'metadata'
});

module.exports = { pais };
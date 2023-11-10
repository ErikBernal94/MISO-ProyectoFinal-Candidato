const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
//   host: 'localhost',
//   port: 5432,
//   dialect: 'postgres'
// });

const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  dialect: 'postgres'
});
 
module.exports = sequelize

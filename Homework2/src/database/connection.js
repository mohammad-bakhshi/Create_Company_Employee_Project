const Sequelize = require('sequelize');

const sequelize = new Sequelize("company", "root", "", { host: "localhost", dialect: "mysql" });

module.exports = sequelize;
global.sequelize = sequelize;
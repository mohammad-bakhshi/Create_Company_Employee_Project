const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('management', 'root', 'canyoudance78@#', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports =sequelize;
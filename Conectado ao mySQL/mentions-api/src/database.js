const Sequelize = require('sequelize');

const sequelize = new Sequelize('juan', 'jnovais', '123456', {
    host: 'localhost',
    dialect:'mysql'
  });

  module.exports = {
    sequelize,
    Sequelize
  };
'use strict'

const db = require('../database');

const customer = db.sequelize.define('Customer', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});
customer.sync({force: false});

module.exports = customer;
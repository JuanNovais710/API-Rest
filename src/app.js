'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

const mongoose = require('mongoose');

//conectando ao banco de dados
mongoose.connect(config.connectionString);

//instanciando o produto
const Product = require('./models/product');
//instanciando cliente
const Customer = require('./models/customer');
//instanciando os pedidos
const Order = require('./models/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

//trazendo as rotas
const indexRoutes = require('./routes/index-route.js');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use('/', indexRoutes);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);


module.exports = app;

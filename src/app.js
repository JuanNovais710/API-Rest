'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//conectando ao banco de dados
mongoose.connect('mongodb+srv://testeapi:testeapi@cluster0.7kdkoon.mongodb.net/?retryWrites=true&w=majority')

//instanciando o produto
const Product = require('./models/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

//trazendo as rotas
const indexRoutes = require('./routes/index-route.js');
const productRoute = require('./routes/product-route');

app.use('/', indexRoutes);
app.use('/products', productRoute);

module.exports = app;

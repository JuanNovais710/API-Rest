'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('../../config');

/*
Criando o modelo para a tabela pessoa
const Pessoa = sequelize.define('pessoa', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
    }
});
//Força a criação da tabela toda vez que o programa é executado
//Pessoa.sync({force: true});

Pessoa.create({
    nome: "Juan",
    idade: 18
});

//Conexão com mysql
/*
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'jnovais',
    password: '123456',
    database: 'juan'
});
//Conexão com mysql
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
}); 


//Consultando tabela user do banco de dados
/* connection.query('SELECT * FROM users', function (err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    } else {
        console.log("Erro ao realizar consulta");
    }
}); */

//Inserindo novo usuário, ID já é primary key.
/* connection.query("INSERT INTO users(nome, email) VALUES ('Kelly', 'kellysandes1@gmail.com')", function (err, result) {
    if (!err) {
        console.log('Usuario cadastrado com sucesso.');
    } else {
        console.log('Erro ao cadastrar usuário.');
    }
}); */

//Atualizando dados de um usuário
/* connection.query("UPDATE users SET nome = 'Mateus' WHERE id = 1"), function(err, result){
    if(!err) {
        console.log("Usuario editado com sucesso");
    }  else{
        console.log("Erro o usuário não foi encontrado");
    }
}; 
 */

//Apagando usuário do banco de dados. 
/* connection.query("DELETE FROM users WHERE id = 1", function(err, result) {
    if(!err) {
        console.log("Usuário apagado com sucesso. ")
    }else {
        console.log("Falha ao deletar usuário. ")
    }
}); */

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

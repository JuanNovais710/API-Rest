'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
    .find({active: true   //mostrar somente ativos
    }, 'title price slug')//essa linha mostra somente
                          //os dados pedidos ali
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}
exports.getBySlug = (req, res, next) => {
    Product.findOne({
        slug: req.params.slug, //< acha o produto pelo slug
        active:true}, 
        'title description price slug tags' )
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
    var product = new Product();
    //ao criar o produto com req.body /\aqui deve
    //tomar cuidado pois cadastrará com o padrao
    //criado em product.js, se quiser mudar algo
    //na hora de cadastrar por exemplo, instanciar
    //como abaixo:
    //product.title = req.body.title;
    //product.description = req.body.description;
    //e assim por diante.
    product
        .save().
        then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
            }).catch(e => { 
                res.status(400).send({
                    message: 'Falha ao cadastrar o produto.', 
                    data: e
            });
        });
};

exports.put = ('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
});

exports.delete = ('/', (req, res, next) => {
    res.status(200).send(req.body);
});

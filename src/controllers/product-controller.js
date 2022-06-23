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
exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

//com a pesquisa de uma tag na url acha os produtos
//com a tag pesquisada (1 vantagem do banco nosql)
exports.getByTag = (req, res, next) => {
    Product.find({
        tags: req.params.tag,
        active: true 
    }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    //ao criar o produto com req.body /\aqui deve
    //tomar cuidado pois cadastrará com o padrao
    //criado em product.js, se quiser mudar algo
    //na hora de cadastrar por exemplo, instanciar
    //como abaixo:
    //product.title = req.body.title;
    //product.description = req.body.description;
    //e assim por diante.
    product
        .save()
        .then(x => {
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

exports.put = (req, res, next) => {
    Product
    .findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug
        }
    }).then( x=> {
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao atualizar produto.",
            data: e
        });
    });
}

exports.delete = (req, res, next) => {
    Product
    .findOneAndRemove(req.body.id)
    .then(x=> {
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao remover produto.",
            data: e
        });
    });
};

'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/', controller.get);
//o ":" é a ser inserido na pesquisa na url
//ex: localhost:3000/slug-a-ser-pesquisado
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/', controller.delete);

module.exports = router;
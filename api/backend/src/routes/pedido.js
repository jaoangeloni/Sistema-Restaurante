const express = require('express');

const router = express.Router();

const pedido = require('../controllers/pedido');
router.post('/pedido', pedido.create);
router.get('/pedido', pedido.read);
router.get('/pedido/cozinha', pedido.readCozinha);
router.get('/pedido/entrega', pedido.readEntrega);
router.get('/pedido/hoje', pedido.readHoje);
router.get('/pedido/:id', pedido.read);
router.put('/pedido', pedido.update);
router.put('/pedido/cozinha', pedido.concluirCozinha);
router.delete('/pedido/:id', pedido.del);

module.exports = router;
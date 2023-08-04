const express = require('express');

const router = express.Router();

const pedido = require('../controllers/pedido');
router.post('/pedido', pedido.create);
router.get('/pedido', pedido.read);
router.put('/pedido', pedido.update);
router.delete('/pedido/:id', pedido.del);

module.exports = router;
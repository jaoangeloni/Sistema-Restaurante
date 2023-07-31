const express = require("express");
const router = express.Router();

const Pedido = require('../controllers/pedido');

router.post('/pedido/criar', Pedido.criar);
router.get('/pedido/listar', Pedido.listar);
router.get('/pedido/listar/:id', Pedido.listar);
router.put('/pedido/alterar', Pedido.alterar);
router.delete('/pedido/excluir/:id', Pedido.excluir);

module.exports = router
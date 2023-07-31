const express = require("express");
const router = express.Router();

const Itens = require('../controllers/itens');

router.post('/itens/criar', Itens.criar);
router.get('/itens/listar', Itens.listar);
router.get('/itens/listar/:id', Itens.listar);
router.put('/itens/alterar', Itens.alterar);
router.delete('/itens/excluir/:id', Itens.excluir);

module.exports = router
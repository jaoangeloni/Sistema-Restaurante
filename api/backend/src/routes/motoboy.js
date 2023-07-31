const express = require("express");
const router = express.Router();

const Motoboy = require('../controllers/motoboy');

router.post('/motoboy/criar', Motoboy.criar);
router.get('/motoboy/listar', Motoboy.listar);
router.get('/motoboy/listar/:id', Motoboy.listar);
router.put('/motoboy/alterar', Motoboy.alterar);
router.delete('/motoboy/excluir/:id', Motoboy.excluir);

module.exports = router
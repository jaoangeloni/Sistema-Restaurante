const express = require('express');

const router = express.Router();

const cardapio = require('../controllers/cardapio');
router.post('/cardapio', cardapio.create);
router.get('/cardapio', cardapio.read);
router.put('/cardapio', cardapio.update);
router.delete('/cardapio/:id', cardapio.del);

module.exports = router;
const express = require('express');

const router = express.Router();

const itens = require('../controllers/itens');
router.post('/itens', itens.create);
router.get('/itens', itens.read);
router.get('/itens/:id', itens.read);
router.put('/itens', itens.update);
router.delete('/itens/:id', itens.del);

module.exports = router;
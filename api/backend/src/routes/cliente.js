const express = require('express');

const router = express.Router();

const cliente = require('../controllers/cliente');
router.post('/cliente', cliente.create);
router.get('/cliente', cliente.read);
router.put('/cliente', cliente.update);
router.delete('/cliente/:id', cliente.del);

module.exports = router;
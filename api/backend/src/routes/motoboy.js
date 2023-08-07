const express = require('express');

const router = express.Router();

const motoboy = require('../controllers/motoboy');
router.post('/motoboy', motoboy.create);
router.get('/motoboy', motoboy.read);
router.get('/motoboy/:id', motoboy.read);
router.put('/motoboy', motoboy.update);
router.delete('/motoboy/:id', motoboy.del);

module.exports = router;
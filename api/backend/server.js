require('dotenv').config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000

const routerCardapio = require('./src/routes/cardapio')
const routerCliente = require('./src/routes/cliente')
const routerItens = require('./src/routes/itens')
const routerMotoboy = require('./src/routes/motoboy')
const routerPedido = require('./src/routes/pedido')


const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routerCardapio)
app.use('/', routerCliente)
app.use('/', routerItens)
app.use('/', routerMotoboy)
app.use('/', routerPedido)

app.listen(PORT, () => {
    console.log("Positivo e operante");
});
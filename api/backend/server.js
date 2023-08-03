const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000

const routerCardapio = require('./src/routes/cardapio')
const routerCliente = require('./src/routes/cliente')
const routerPedido = require('./src/routes/pedido')
const routerItens = require('./src/routes/itens')
const routerMotoboy = require('./src/routes/motoboy')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routerCardapio)
app.use('/', routerCliente)
app.use('/', routerPedido)
app.use('/', routerItens)
app.use('/', routerMotoboy)

app.listen(PORT, () => {
    console.log("Positivo e operante");
});
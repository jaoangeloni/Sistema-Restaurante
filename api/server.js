const express = require("express");
const cors = require("cors");

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

app.listen(3000, () => {
    console.log("Positivo e operante");
});
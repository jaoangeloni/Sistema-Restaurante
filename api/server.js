const express = require("express");
const cors = require("cors");

const routerCardapio = require('./src/routes/cardapio')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routerCardapio)

app.listen(3000, () => {
    console.log("Positivo e operante");
});
require('dotenv').config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000

const routerMotoboy = require('./src/routes/motoboy')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routerMotoboy)

app.listen(PORT, () => {
    console.log("Positivo e operante");
});
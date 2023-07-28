const con = require('../DAO/connect')
const Cardapio = require('../models/cardapio')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Cardapio(lista[i])
    return lista
}


const criar = (req, res) => {
    let cardapio = new Cardapio(req.body)
    con.query(cardapio.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = async (req, res) => {
    let cardapio = new Cardapio(req.params)
    con.query(cardapio.read(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let cardapio = new Cardapio(req.body)
    con.query(cardapio.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let cardapio = new Cardapio(req.params)
    con.query(cardapio.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}


module.exports = {
    criar,
    listar,
    alterar,
    excluir
}
const con = require('../DAO/connect')
const Pedido = require('../models/pedido')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Pedido(lista[i])
    return lista
}


const criar = (req, res) => {
    let pedido = new Pedido(req.body)
    con.query(pedido.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = async (req, res) => {
    let pedido = new Pedido(req.params)
    con.query(pedido.read(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let pedido = new Pedido(req.body)
    con.query(pedido.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let pedido = new Pedido(req.params)
    con.query(pedido.delete(), (err, result) => {
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
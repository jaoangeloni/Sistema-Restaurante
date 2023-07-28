const con = require('../DAO/connect')
const Motoboy = require('../models/motoboy')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Motoboy(lista[i])
    return lista
}


const criar = (req, res) => {
    let motoboy = new Motoboy(req.body)
    con.query(motoboy.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = async (req, res) => {
    let motoboy = new Motoboy(req.params)
    con.query(motoboy.read(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let motoboy = new Motoboy(req.body)
    con.query(motoboy.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let motoboy = new Motoboy(req.params)
    con.query(motoboy.delete(), (err, result) => {
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
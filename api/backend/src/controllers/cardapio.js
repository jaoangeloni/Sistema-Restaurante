const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const cardapio = await prisma.cardapio.findMany();
    return res.json(cardapio);
}

const create = async (req, res) => {
    const data = req.body;
    const cardapio = await prisma.cardapio.create({
        data: data
    });
    return res.status(201).json(cardapio).end();
}

const update = async (req, res) => {
    const data = req.body;
    let cardapio = await prisma.cardapio.update({
        data: data,
        where: {
            id: parseInt(req.body.id)
        }
    });
    res.status(202).json(cardapio).end();
}

const del = async (req, res) => {
    let cardapio = await prisma.cardapio.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(204).json(cardapio).end();
}

module.exports = {
    read,
    create,
    update,
    del
};
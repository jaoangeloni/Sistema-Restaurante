const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const pedido = await prisma.pedido.findMany();
    return res.json(pedido);
}

const create = async (req, res) => {
    const data = req.body;
    const pedido = await prisma.pedido.create({
        data: data
    });
    return res.status(201).json(pedido).end();
}

const update = async (req, res) => {
    const data = req.body;
    let pedido = await prisma.pedido.update({
        data: data,
        where: {
            id: parseInt(req.body.id)
        }
    });
    res.status(202).json(pedido).end();
}

const del = async (req, res) => {
    let pedido = await prisma.pedido.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(204).json(pedido).end();
}

module.exports = {
    read,
    create,
    update,
    del
};
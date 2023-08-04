const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const cliente = await prisma.cliente.findMany();
    return res.json(cliente);
}

const create = async (req, res) => {
    const data = req.body;
    const cliente = await prisma.cliente.create({
        data: data
    });
    return res.status(201).json(cliente).end();
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let cliente = await prisma.cliente.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(cliente).end();
    } catch (error) {
        res.status(404); json({ error: error.message.end() })
    }
}

const del = async (req, res) => {
    try {
        let cliente = await prisma.cliente.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(cliente).end();
    } catch (error) {
        res.status(404); json({ error: error.message.end() })
    }
}

module.exports = {
    read,
    create,
    update,
    del
};
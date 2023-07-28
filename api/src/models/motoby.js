class Motoboy {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.placa = i.placa
        this.modelo = i.modelo
    }

    create() {
        return `INSERT INTO motoboy VALUE(default,'${this.nome}','${this.placa}','${this.modelo}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM motoboy`
        else
            return `SELECT * FROM motoboy WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE motoboy SET produto = '${this.produto}', descricao = '${this.descricao}', preco = ${this.preco} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM motoboy WHERE id = ${this.id}`
    }

}

module.exports = Motoboy 
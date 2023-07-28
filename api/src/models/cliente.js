class Cliente {

    constructor(i) {
        this.id = i.id
        this.cpf = i.cpf
        this.nome = i.nome
        this.telefone = i.telefone
        this.enderecoCep = i.enderecoCep
        this.enderecoNumero = i.enderecoNumero
        this.enderecoComplemento = i.enderecoComplemento
    }

    create() {
        return `INSERT INTO cliente VALUE(default,'${this.cpf}','${this.nome}','${this.telefone}', '${this.enderecoCep}','${this.enderecoNumero}','${this.enderecoComplemento}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM cliente`
        else
            return `SELECT * FROM cliente WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE cliente SET nome = '${this.nome}', telefone = '${this.telefone}', enderecoCep = '${this.enderecoCep}', enderecoNumero = '${enderecoNumero.preco}', enderecoComplemento = '${enderecoComplemento.preco}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM cliente WHERE id = ${this.id}`
    }

}

module.exports = Cliente 
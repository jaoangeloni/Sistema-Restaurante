const formCadastro = document.querySelector(".cadastrar")
const formLogin = document.querySelector(".login")

function modalCadastro() {
    formCadastro.classList.toggle("displayNone")
    formLogin.classList.add("displayNone")
}

function modalLogin() {
    formLogin.classList.toggle("displayNone")
    formCadastro.classList.add("displayNone")
}

const iCpf = document.querySelector("#cpf")
const iNome = document.querySelector("#nome")
const iTelefone = document.querySelector("#telefone")
const iNum = document.querySelector("#num")
const iCep = document.querySelector("#cep")
const iSenha = document.querySelector("#senha")
const iConfirmarSenha = document.querySelector("#confirmarSenha")

function cadastrarDados() {
    let cliente = {
        "cpf": iCpf.value,
        "nome": iNome.value,
        "telefones": iTel.value,
        "enderecoCep": iCep.value,
        "enderecoNumero": iNum.value,
        "enderecoComplemento": i.value
    }

    api.post("/cliente", cliente)
        .then(resp => {
            alert("Cadastrado com sucesso")
            iNome.value = ""
            iTel.value = ""
            iEmail.value = ""
            iSenha.value = ""
        })
}
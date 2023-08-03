const formCadastro = document.querySelector(".cadastrar");

function modalCadastro() {
    formCadastro.classList.toggle("displayNone");
};

const iCpf = document.querySelector("#cpf");
const iNome = document.querySelector("#nome");
const iTel = document.querySelector("#telefone");
const iNum = document.querySelector("#num");
const iCep = document.querySelector("#cep");
const iComplemento = document.querySelector("#complemento");

function cadastrarDados() {
    let cliente = {
        "cpf": iCpf.value,
        "nome": iNome.value,
        "telefones": iTel.value,
        "enderecoCep": iCep.value,
        "enderecoNumero": iNum.value,
        "enderecoComplemento": iComplemento.value
    };

    api.post("/cliente/criar", cliente)
        .then(resp => {
            alert("Cadastrado com sucesso");
            iCpf.value = "";
            iNome.value = "";
            iTel.value = "";
            iCep.value = "";
            iNum.value = "";
            iComplemento.value = "";
        })

}
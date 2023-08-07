const iCpf = document.querySelector("#cpf");
const iNome = document.querySelector("#nome");
const iTel = document.querySelector("#telefone");
const iNum = document.querySelector("#num");
const iCep = document.querySelector("#cep");
const iComplemento = document.querySelector("#complemento");

const itens = document.querySelector(".itens")

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


api.get("/cardapio/")
    .then(resp => {
        const dados = resp.data
        dados.forEach(item => {
            criarCard(item)
        });
    })

function criarCard(imovel) {
    let card = document.createElement("div")
    card.classList.add("card")

    let nome = document.createElement("p")

    let imagem = document.createElement("img")

    let descricao = document.createElement("p")

    descricao.classList.add("descricao")
    let preco = document.createElement("p")

    let div = document.createElement("div")
    div.classList.add("quantidade")

    let minus = document.createElement("span")
    minus.innerHTML = "-"
    minus.classList.add("botoes")

    let plus = document.createElement("span")
    plus.innerHTML = "+"
    plus.classList.add("botoes")

    let adicionar = document.createElement("input")
    adicionar.type = "number";
    adicionar.value = "0"
    adicionar.classList.add("input")

    nome.innerHTML = imovel.produto

    if (imovel.id < 6)
        imagem.src = "https://cdn-icons-png.flaticon.com/512/2771/2771406.png"
    else
        imagem.src = "https://cdn-icons-png.flaticon.com/512/6602/6602190.png"

    descricao.innerHTML = imovel.descricao
    preco.innerHTML = "R$" + imovel.preco

    card.appendChild(nome)
    card.appendChild(imagem)
    card.appendChild(descricao)
    card.appendChild(preco)
    card.appendChild(div)

    div.appendChild(minus)
    div.appendChild(adicionar)
    div.appendChild(plus)

    itens.appendChild(card)
}
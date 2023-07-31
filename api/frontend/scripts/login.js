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
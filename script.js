let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirm = document.querySelector("#confirm");
let senha = document.querySelector("#senha");
let select = document.querySelector("select");
let botao = document.querySelector("#botao");
let texto = document.querySelector("p");
let formulario = document.querySelector("form");
let section = document.querySelector("section");
let mensagens = document.querySelectorAll("h3")
let naoSouEu = document.querySelector("a");


if(localStorage.nome){
    formulario.style.display="none";
    section.style.display="block";
    mensagens[0].innerHTML = `Seja bem vindo ${localStorage.nome}`;
    mensagens[1].innerHTML = `Seu email é ${localStorage.email}`;
    naoSouEu.innerHTML = `Não sou ${localStorage.nome}`;

}
else{
    botao.onclick = () =>{
        if(email.value != "" && email.value === confirm.value){
            localStorage.setItem("nome", nome.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("senha", senha.value);
            localStorage.setItem("sexo", select.value);
            texto.innerHTML="";
            naoSouEu.innerHTML = `Não sou ${localStorage.nome}`;
        }
        else{
            texto.innerHTML = `Confirmação de email incorreta`;
        }
    }

}

function limparStorage(){
    localStorage.clear();
}

naoSouEu.onclick = limparStorage;

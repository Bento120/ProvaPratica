const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;

function recuperarSenha(){
 document.getElementById("login").style.display = "none";
 document.getElementById("recuperacao").style.display = "block";
}

function voltarLogin(){
 document.getElementById("login").style.display = "block";
 document.getElementById("recuperacao").style.display = "none";
}

function sublinhadoRecuperarSenhaEscuro(){
 document.getElementById("recuperarSenha").style.textDecorationColor = "rgb(0, 120, 245)"
}

function sublinhadoRecuperarSenhaClaro(){
 document.getElementById("recuperarSenha").style.textDecorationColor = "rgb(120, 180, 245)"
}
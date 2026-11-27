function carregarRodape(){

    document.getElementById("rodape").innerHTML = 
        `<img src="assets/LogoTechStore.png" width="200" height="auto">
        <p>TechStore é uma empresa fictícia com intuito de aprendizagem e estudo em desinvovimentos de sites/sistemas. Não pussue nenhum fim lucrativo.<br>© <span id="ano"></span> TechStore — Todos os direitos reservados.</p> `;
} carregarRodape();

const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;

/* Script da pagína de login */
function voltarLogin(){
 document.getElementById("login").style.display = "block";
 document.getElementById("recuperacao").style.display = "none";
}

function sublinhadoRecuperarSenhaEscuro(){
 document.getElementById("recuperarSenha").style.textDecorationColor = "rgb(0, 120, 245)";
}

function sublinhadoRecuperarSenhaClaro(){
 document.getElementById("recuperarSenha").style.textDecorationColor = "rgb(120, 180, 245)";
}

function recuperarSenha(){
 document.getElementById("login").style.display = "none";
 document.getElementById("recuperacao").style.display = "block";
}

function emailRecuperacao(){
 document.getElementById("status-recuperacao").textContent =  "O envio de e-mails ainda não está disponível.";
}

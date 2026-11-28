// script cabeçalho
function carregarCabecalho() {
    const cabecalho = document.getElementById("cabecalho");

    if (cabecalho) {
        cabecalho.innerHTML =
            `<a class="logo" href="index.html"><img id="Logo" src="assets/LogoTechStore.png" width="200" height="auto"></a>

        <nav>
            <a href="produtos.html"><span class="mdi mdi-package-variant-closed"></span>PRODUTOS</a>
            <a href="sobre-nos.html"><span class="mdi mdi-information-outline"></span>SOBRE NÓS</a>
            <a href="login.html"><span class="mdi mdi-account"></span>MINHA CONTA</a>
        </nav>
        <a href="carrinho.html" class="carrinho"><span class="mdi mdi-cart"></span>
        <div class="textoCarrinho"><b>CARRINHO</b><span id="itensCarrinho"></span></div></a>`;
    }
}
carregarCabecalho();

// script rodapé
function carregarRodape() {
    const rodape = document.getElementById("rodape");

    if ("rodape") {
        rodape.innerHTML =
            `<img src="assets/LogoTechStore.png" width="200" height="auto">
        <p>TechStore é uma empresa fictícia com intuito de aprendizagem e estudo em desinvovimentos de sites/sistemas. Não pussue nenhum fim lucrativo.<br>© <span id="ano"></span> TechStore — Todos os direitos reservados.</p>`;
    }
}
carregarRodape();

const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;

carregarRodape();

// Script da pagína Login
function voltarLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("recuperacao").style.display = "none";
}

function sublinhadoRecuperarSenhaEscuro() {
    document.getElementById("recuperarSenha").style.textDecorationColor = "rgb(0, 120, 245)";
}

function sublinhadoRecuperarSenhaClaro() {
    document.getElementById("recuperarSenha").style.textDecorationColor = "rgb(120, 180, 245)";
}

function recuperarSenha() {
    document.getElementById("login").style.display = "none";
    document.getElementById("recuperacao").style.display = "block";
}

function emailRecuperacao() {
    document.getElementById("status-recuperacao").textContent = "O envio de e-mails ainda não está disponível.";
}

const emailRec = document.getElementById("email-login");

if (emailRec) {
    emailRec.addEventListener("invalid", function () {
        if (emailRec.validity.valueMissing) {
            emailRec.setCustomValidity("Preencha este campo.");
        } else {
            emailRec.setCustomValidity("Insira um e-mail válido.");
        }
    });

    emailRec.addEventListener("input", function () {
        emailRec.setCustomValidity("");
    });
}

// Script da página Carrinho

let itensCarrinho = Number(localStorage.getItem("itensCarrinho"));

function addProdutosCarrinho() {
    itensCarrinho++;
    localStorage.setItem("itensCarrinho", itensCarrinho);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    document.getElementById("itensCarrinho").textContent = itensCarrinho + " Produtos";
}
atualizarCarrinho();
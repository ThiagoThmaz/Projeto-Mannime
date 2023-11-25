function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");

    // Check if the element exists before accessing its properties
    if (divAguardar) {
        divAguardar.style.display = "flex";
    } else {
        console.error("Element with id 'div_aguardar' not found");
    }
}
function finalizarAguardar(texto) {

    var divAguardar = document.getElementById("div_aguardar");

    // Check if the element exists before accessing its properties
    if (divAguardar) {
        divAguardar.style.display = "none";
    } else {
        console.error("Element with id 'div_aguardar' not found");
    }
}
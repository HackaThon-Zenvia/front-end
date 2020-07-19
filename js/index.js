// Menu Stick
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    let menuBar = document.querySelector('nav')
    if (menuBar.style.position == "sticky" && document.body.scrollTop > 50 || document.documentElement.scrollTop > 0) {
        document.querySelector("nav").style.height = "50px";
        document.querySelector("nav").style.paddingTop = "15px";
        document.querySelector("nav").style.paddingBottom = "15px";
        document.querySelector("nav").classList.add('navBg')

    } else {
        document.querySelector("nav").style.height = "150px";
        document.querySelector("nav").style.paddingTop = "0";
        document.querySelector("nav").style.paddingBottom = "0";
        document.querySelector("nav").classList.remove('navBg')

    }
}


function fecharEntrar() {
    var divLogar = document.querySelector('#entrar')
    var divCadastrar = document.querySelector('#cadastrar')

    if (divLogar.style.display == "flex" || divLogar.style.display == "") {
        divLogar.classList.add('fecharEntrar')

        divCadastrar.style.display = "flex"
        divCadastrar.classList.add('abrirCadastrar')
    }
}

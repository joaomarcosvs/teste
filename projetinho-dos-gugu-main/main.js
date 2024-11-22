var moldura
var botaoVoltar
var botaoAvancar
var fotos
var indice
var temporizador

const pasta = "imagens/"
const extensao = ".jpg"
const tempo = 7000

botaoVoltar = document.getElementById ("btnVoltar")
botaoAvancar = document.getElementById ("btnAvancar")
moldura = document.getElementById ("carrossel")

fotos = ["moveis2","moveis3","moveis4","moveis5"]

indice = 0

window.onload = Inicio

function Inicio(){

    botaoAvancar.onclick = AvancarFoto
    MostrarFoto()
    botaoVoltar.onclick = VoltarFoto
    AutomaticoFoto()
}

function AvancarFoto(){

    if(indice < fotos.length-1){

        indice++
    }
    else{

        indice = 0
    }
    
    MostrarFoto()
    clearInterval(temporizador)
    AutomaticoFoto()
}

function VoltarFoto(){

    if(indice>0){
         
        indice--
    }
    else{
        
        indice = fotos.length-1
    }

    MostrarFoto()
    clearInterval(temporizador)
    AutomaticoFoto()

}

function AutomaticoFoto(){

    temporizador = setInterval(AvancarFoto,tempo)
}

function MostrarFoto(){

    moldura.src = pasta+fotos[indice]+extensao

}

    // HEADER

const header = document.getElementById('header');

window.onscroll = function() {
    if (window.scrollY > 50) {  // Quando a rolagem for maior que 50px
        header.classList.add('scrolled');  // Adiciona a classe 'scrolled'
    } else {
        header.classList.remove('scrolled');  // Remove a classe 'scrolled' quando a rolagem for menor que 50px
    }
};

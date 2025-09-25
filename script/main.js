const linkBasico = document.querySelector(".linkBasico");
const linkIntermediario = document.querySelector(".linkIntermediario");
const linkAvancado = document.querySelector(".linkAvancado");
//
const escolhasNivel = document.querySelector(".escolhas");
//
const tipoCelular = document.querySelector(".tipoCelularSelecionado");
const tipoComputador = document.querySelector(".tipoComputadorSelecionado");
//
// pegarei os conteudos basicos aqui
const conteudoBasicoCelular = document.querySelector(".conteudoBasicoCelular")
const conteudoBasicoComputador = document.querySelector(".conteudoBasicoComputador")
// pegarei os intermediarios aqui
const conteudoIntermediarioComputador = document.querySelector(".conteudoIntermediarioComputador")
const conteudoIntermediarioCelular = document.querySelector(".conteudoIntermediarioCelular")
//
let variavelControleCelular = false;
let variavelControleComputador = false;

console.log("Funcionou")

tipoCelular.addEventListener("click", function() {
    if (tipoCelular.checked) {
        variavelControleComputador = false;
        variavelControleCelular = true;
        conteudoBasicoComputador.style.display = "none";
        conteudoIntermediarioComputador.style.display = "none";
        // conteudoAvancadoComputador.style.display = "none";
        console.log("Celular")

        escolhasNivel.style.display = "flex";
    }
});

tipoComputador.addEventListener("click", function(){
    if(tipoComputador.checked){
        variavelControleCelular = false;
        conteudoBasicoCelular.style.display = "none";

        variavelControleComputador = true;

        console.log("Computador")

        escolhasNivel.style.display = "flex";
    }

});

linkBasico.addEventListener('click', e => {


    if(variavelControleCelular){
        console.log("Atualizou a pagina para celular");
        conteudoBasicoComputador.style.display = "none";
        conteudoIntermediarioCelular.style.display = "none";
        conteudoBasicoCelular.style.display = "flex";

    }



    if(variavelControleComputador){
        console.log("Atualizou a pagina para computador");
        conteudoBasicoCelular.style.display = "none";

        conteudoBasicoComputador.style.display = "flex";
    }

})


// Intermediario
linkIntermediario.addEventListener('click', e => {


    if(variavelControleCelular){
        conteudoBasicoCelular.style.display = "none";
        conteudoBasicoComputador.style.display = "none";


        conteudoIntermediarioCelular.style.display = "flex";

        console.log("Intermediario Celular")

    }



    if(variavelControleComputador){



        conteudoIntermediarioComputador.style.display = "flex";
        console.log("Atualizou a pagina para computador Intermediario");
    }

})


// AVANÇADO
linkAvancado.addEventListener('click', e => {


    if(variavelControleCelular){
        console.log("Atualizou a pagina para celular Avançado");
    }



    if(variavelControleComputador){
        console.log("Atualizou a pagina para computador Avançado");
    }

})
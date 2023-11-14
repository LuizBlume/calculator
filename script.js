let valor1 = document.querySelector("#valor1").value;
let valor2 = document.querySelector("#valor2").value;
let soma = document.querySelector("#btSoma");
let subtracao = document.querySelector("#btSub");
let multiplicacao = document.querySelector("#btMult");
let divisao = document.querySelector("#btDiv");
let resultado = document.querySelector("#resultado");

function somar(a, b) {
    let resultadoSoma = a + b;
    resultado.innerHTML = resultadoSoma;
}
function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}
function multiplicar(a, b) {
    let multiplicacao = a * b;
    resultado.innerHTML = multiplicacao;
}
function dividir(a, b) {
    let divisao = a / b;
    resultado.innerHTML = divisao;
}

soma.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    somar(Number(valor1), Number(valor2));
});

subtracao.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    subtrair(Number(valor1), Number(valor2));
});

multiplicacao.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    multiplicar(Number(valor1), Number(valor2));
});

divisao.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    dividir(Number(valor1), Number(valor2));
});

let selectedLanguage = document.querySelector("#idioma");
selectedLanguage.addEventListener("change", function() {
    if (this.value == "br") {
        btSoma.value = "Soma"
        btSub.value = "Divisão"
        btMult.value = "Multiplicação"
        btDiv.value = "Divisão "
    } else if (this.value == "en") {
        btSoma.value = "Sum"
        btSub.value = "Subtraction"
        btMult.value = "multiplication"
        btDiv.value = "division"
    } else if (this.value == "es") {
        btSoma.value = "Suma"
        btSub.value = "sustracción"
        btMult.value = "multiplicación"
        btDiv.value = "División"
    }
})
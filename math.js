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

// let selectedLanguage = document.querySelector("#idioma");
// selectedLanguage.addEventListener("change", function() {
//     if (this.value == "br") {
//         btSoma.value = "Soma"
//         btSub.value = "Divisão"
//         btMult.value = "Multiplicação"
//         btDiv.value = "Divisão "
//     } else if (this.value == "en") {
//         btSoma.value = "Sum"
//         btSub.value = "Subtraction"
//         btMult.value = "multiplication"
//         btDiv.value = "division"
//     } else if (this.value == "es") {
//         btSoma.value = "Suma"
//         btSub.value = "sustracción"
//         btMult.value = "multiplicación"
//         btDiv.value = "División"
//     } else if (this.value == "fr") {
//         btSoma.value = "Somme"
//         btSub.value = "Soustraction"
//         btMult.value = "multiplication"
//         btDiv.value = "Division"
//     } else if (this.value == "it") {
//         btSoma.value = "Somma"
//         btSub.value = "Sottrazione"
//         btMult.value = "moltiplicazione"
//         btDiv.value = "Divisione"
//     } else if (this.value == "ru") {
//         btSoma.value = "Сумма"
//         btSub.value = "Вычитание"
//         btMult.value = "умножение"
//         btDiv.value = "деление"
//     } else if (this.value == "de") {
//         btSoma.value = "Summe"
//         btSub.value = "Subtraktion"
//         btMult.value = "Multiplikation"
//         btDiv.value = "Division"
//     } else if (this.value == "ja") {
//         btSoma.value = "合計"
//         btSub.value = "減算"
//         btMult.value = "乗算"
//         btDiv.value = "除算"
//     } else if (this.value == "ar") {
//         btSoma.value = "مجموع"
//         btSub.value = "طرح"
//         btMult.value = "ضرب"
//         btDiv.value = "قسمة"
//     } else if (this.value == "zh") {
//         btSoma.value = "总和"
//         btSub.value = "减法"
//         btMult.value = "乘法"
//         btDiv.value = "除法"
//     } else if (this.value == "ko") {
//         btSoma.value = "합계"
//         btSub.value = "빼기"
//         btMult.value = "곱하기"
//         btDiv.value = "나누기"
//     } else if (this.value == "nl") {
//         btSoma.value = "Som"
//         btSub.value = "Aftrekking"
//         btMult.value = "vermenigvuldiging"
//         btDiv.value = "verdeling"
//     } else if (this.value == "pl") {
//         btSoma.value = "Suma"
//         btSub.value = "Odejmowanie"
//         btMult.value = "mnożenie"
//         btDiv.value = "podział"
//     } else if (this.value == "tr") {
//         btSoma.value = "Toplam"
//         btSub.value = "Çıkarma"
//         btMult.value = "çarpma"
//         btDiv.value = "bölme"
//     } else if (this.value == "he") {
//         btSoma.value = "סכום"
//         btSub.value = "חיסור"
//         btMult.value = "כפל"
//         btDiv.value = "חלוקה"
//     } else if (this.value == "hi") {
//         btSoma.value = "योग"
//         btSub.value = "घटाना"
//         btMult.value = "गुणा"
//         btDiv.value = "विभाजन"
//     } else if (this.value == "id") {
//         btSoma.value = "Jumlah"
//         btSub.value = "Pengurangan"
//         btMult.value = "perkalian"
//         btDiv.value = "pembagian"
//     } else if (this.value == "ms") {
//         btSoma.value = "Jumlah"
//         btSub.value = "Pengurangan"
//         btMult.value = "perkalian"
//         btDiv.value = "pembagian"
//     } else if (this.value == "th") {
//         btSoma.value = "ผลรวม"
//         btSub.value = "การลบ"
//         btMult.value = "การคูณ"
//         btDiv.value = "การหาร"
//     }
// })
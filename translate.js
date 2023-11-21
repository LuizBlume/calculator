let linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "./idiomas/espanhol.js";
document.head.appendChild(linguaEspanhola);

let linguaInglesa = document.createElement("script");
linguaInglesa.src = "/idiomas/ingles.js";
document.head.appendChild(linguaInglesa);

let linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "./idiomas/frances.js";
document.head.appendChild(linguaFrancesa);

let linguaAlema = document.createElement("script");
linguaAlema.src = "./idiomas/alemao.js";
document.head.appendChild(linguaAlema);

let linguaItaliana = document.createElement("script");
linguaItaliana.src = "./idiomas/italiano.js";
document.head.appendChild(linguaItaliana);

let linguaJaponesa = document.createElement("script");
linguaJaponesa.src = "./idiomas/japones.js";
document.head.appendChild(linguaJaponesa);

let linguaChinesa = document.createElement("script");
linguaChinesa.src = "./idiomas/chines.js";
document.head.appendChild(linguaChinesa);

let linguaCoreana = document.createElement("script");
linguaCoreana.src = "./idiomas/coreano.js";
document.head.appendChild(linguaCoreana);

let linguaRussa = document.createElement("script");
linguaRussa.src = "./idiomas/russo.js";
document.head.appendChild(linguaRussa);

let linguaArabe = document.createElement("script");
linguaArabe.src = "./idiomas/arabe.js";
document.head.appendChild(linguaArabe);

let linguaTurca = document.createElement("script");
linguaTurca.src = "./idiomas/turco.js";
document.head.appendChild(linguaTurca);

let linguaPolonesa = document.createElement("script");
linguaPolonesa.src = "./idiomas/polones.js";
document.head.appendChild(linguaPolonesa);

let linguaHebraica = document.createElement("script");
linguaHebraica.src = "./idiomas/hebraico.js";
document.head.appendChild(linguaHebraica);

let linguaHolandesa = document.createElement("script");
linguaHolandesa.src = "./idiomas/holandes.js";
document.head.appendChild(linguaHolandesa);

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function() {
    translate(this.value)
});


function translate(idioma) {
    let traducao = (idioma == "br") ? portugues() : (idioma == "en") ? ingles() : (idioma == "es") ? espanhol() : (idioma == "fr") ? frances() : (idioma == "de") ? alemao() : (idioma == "it") ? italiano() : (idioma == "jp") ? japones() : (idioma == "ch") ? chines() : (idioma == "ko") ? coreano() : (idioma == "ru") ? russo() : (idioma == "ar") ? arabe() : (idioma == "tr") ? turco() : (idioma == "pl") ? polones() : (idioma == "he") ? hebraico() : (idioma == "nl") ? holandes() : null();
    setLanguage(traducao);
}
function setLanguage(traducao) {
    let btSoma = document.querySelector("#soma");
    btSoma.value = traducao.soma;
    let btSub = document.querySelector("#subtracao");
    btSub.value = traducao.subtracao;
    let btMult = document.querySelector("#multiplicacao");
    btMult.value = traducao.multiplicacao;
    let btDiv = document.querySelector("#divisao");
    btDiv.value = traducao.divisao;
}

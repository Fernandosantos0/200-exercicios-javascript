'use strict';

String.prototype.invertText = function() {
    const reverse = this.split('').reverse().join('');
    return reverse;
};

function inverterTexto(texto) {
    return texto.invertText();
}

console.log(inverterTexto('Olá mundo!'));
console.log(inverterTexto('Qual é o seu nome?'));
console.log(inverterTexto('Bem-vindo á Flórida'));
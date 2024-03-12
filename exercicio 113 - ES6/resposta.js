'use strict'

function listaEnumerada(arr) {
    return arr.map((valor, index) => `${index + 1}. ${valor}`);
}

const frutas = ['Maçã', 'Perâ', 'Uva', 'Goiaba', 'Banana', 'Tomate', 'Laranja'];
console.log(listaEnumerada(frutas));
'use strict'

function criarCarro(modelo, marca = 'Desconhecido', ano = new Date().getFullYear()) {
    return { modelo, marca, ano };
}

const carro0 = criarCarro();
const carro1 = criarCarro('Ferrari');
const carro2 = criarCarro('FIAT', 'UNO');
const carro3 = criarCarro('Chevrolen', 'Onix', 2015);

console.log(carro0);
console.log(carro1);
console.log(carro2);
console.log(carro3);
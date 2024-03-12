'use strict'

function retornarArrayNumeros(...argumentos) {
    const arrayNumeros = argumentos.filter(valor => typeof(valor) === 'number');

    return arrayNumeros;
}

console.log(retornarArrayNumeros('B', true, 5, 'Canadá', 7, '8', 13, false, 6, '7', '23', '48'));
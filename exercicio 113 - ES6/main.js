'use strict'

function criarLista(arr) {

    for(let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}. ${arr[i]}`);
    }

}   

const frutas = ['Maçã', 'Perâ', 'Uva', 'Goiaba', 'Banana', 'Tomate', 'Laranja'];
criarLista(frutas);
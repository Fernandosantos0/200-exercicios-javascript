'use strict';

function gerarArrayDeNome(arr) {
    return arr.map(obj => obj['nome']);
}

const usuario = [
    {
        nome: 'Carlos',
        sobrenome: 'Souza',
        idade: 50
    },
    {
        nome: 'Bianca',
        sobrenome: 'Soares',
        idade: 17
    },
    {
        nome: 'Luis',
        sobrenome: 'Lima',
        idade: 58
    },
    {
        nome: 'Bianca',
        sobrenome: 'Von',
        idade: 54
    },
    {
        nome: 'Fernando',
        sobrenome: 'Santos',
        idade: 24
    },
    {
        nome: 'Pedro',
        sobrenome: 'Luz',
        idade: 34
    }
];

console.log(gerarArrayDeNome(usuario));
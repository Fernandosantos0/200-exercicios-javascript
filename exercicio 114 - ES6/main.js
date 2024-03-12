'use strict'

function extrairInformacao({ titulo, autor, ano }) {
    return `O livro ${titulo} foi escrito por ${autor} em ${ano}.`;
}

const livro = { titulo: 'O Principe', autor: 'Maquiavel', ano: 1532 };
console.log(extrairInformacao(livro));
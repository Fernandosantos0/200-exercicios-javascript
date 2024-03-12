'use strict'

function apresentacao(nome, sobrenome, idade) {
    console.log(`Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade.`);
}

apresentacao('Fernando', 'Santos', 24);
apresentacao('Maria', 'Aparencida', new Date().getFullYear() - 1954);
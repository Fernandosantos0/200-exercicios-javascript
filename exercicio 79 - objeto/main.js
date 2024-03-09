'use strict';

const carro = {
    /* Propriedades */
    marca: 'chevrolet',
    modelo: 'Onix',
    ano: '2023',
    velocidadeAtual: 0,

    /* Métodos */
    acelerar: function() {
        if(this.velocidadeAtual > 250) throw new Error('O carro estar na velocidade máxima 250 km/h');

        this.velocidadeAtual += 10;
    },

    desacelerar: function() {
        if(this.velocidadeAtual < 0) throw new Error('O carro estar em 0 km/h');

        this.velocidadeAtual -= 10;
    },

    frear: function() {
        this.velocidadeAtual = 0;
    }
};

console.log(carro.velocidadeAtual);

carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();

console.log(carro.velocidadeAtual);

carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();

console.log(carro.velocidadeAtual);

carro.frear();

console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
'use strict';

const contaBancaria = {
    /* Propriedade */
    saldo: 0,

    /* Métodos */
    depositar(valor) {
        if(isNaN(valor)) throw new TypeError('O valor inserido não é um número!');

        this.saldo += Number(valor);
    },

    sacar(valor) {
        if(isNaN(valor)) throw new TypeError('O valor inserido não é um número!');

        if(valor > this.saldo) {
            console.log('Saldo inválido');
            return;
        }

        this.saldo -= Number(valor);
    }
};

console.log(contaBancaria.saldo);

contaBancaria.depositar(15);
contaBancaria['depositar'](31);
contaBancaria.depositar(3);
contaBancaria.depositar('13');

console.log(contaBancaria.saldo);

contaBancaria['sacar'](5);
contaBancaria['sacar'](10);

console.log(contaBancaria.saldo);
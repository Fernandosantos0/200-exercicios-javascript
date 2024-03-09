'use strict';

const retangulo = {
    /* Propriedades */
    altura: 5,
    largura: 10,

    /* Método */
    calcularArea: function() {
        return this.altura * this.largura;
    }
};

console.log(retangulo.calcularArea());
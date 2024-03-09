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

const quadrado = Object.create(retangulo);
quadrado.altura = 5;
quadrado.largura = 5;

quadrado.calcularArea = function() {
    return this.altura * this.altura;
}

console.log(quadrado.calcularArea());
'use strict';

const circulo = {
    /* Propriedade */
    raio: 5,

    /* Método */
    area: function() {
        const PI = Math.PI;

        return PI * Math.pow(this.raio, 2);
    },

    circunferencia: function() {
        const PI = Math.PI;

        return 2 * PI * this.raio;
    }
}

console.log(circulo['area']());

console.log(circulo['circunferencia']());
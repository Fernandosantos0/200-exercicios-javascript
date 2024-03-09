'use strict';

const cachorro = new Object({
    /* Propriedades */
    raca: 'Vira Lata',
    nome: 'Thor',
    idade: 2,

    /* Método para retorna a idade do cachorro na idade humana */
    idadeEmAnosHumanos: function() {
        return this.idade * 7;
    }
});

console.log(cachorro['idade']);
console.log(cachorro.idadeEmAnosHumanos());
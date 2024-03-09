'use strict';

const tempo = {
    /* Propriedades */
    hora: 10,
    minuto: 53,
    segundo: 38,

    /* Método */
    converterParaSegundo: function() {
        return this.hora * 3600 + this.segundo * 60 + this.segundo;
    }
};

console.log(tempo.converterParaSegundo());
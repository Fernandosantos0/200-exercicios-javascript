'use strict';

const aluno = {
    /* Propriedades */
    nome: 'Carlos',
    notas: [5.3, 4, 7, 8],

    /* Métodos */
    calcularMedia() {
        const divisor = this.notas.length;
        const total = this.notas.reduce((soma, nota) => soma += nota, 0);

        return (total / divisor).toFixed(1);
    }
};

console.log(aluno.calcularMedia());
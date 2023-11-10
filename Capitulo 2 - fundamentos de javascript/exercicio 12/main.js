'use strict'; 

function situacaoEstudante(media) {

    if(media >= 7) {
        console.log('Aprovado');
    } else if(media > 4.9 && media < 7) {
        console.log('Em recuperação');
    } else {
        console.log('Reprovado');
    }

}

situacaoEstudante(1);
situacaoEstudante(5);
situacaoEstudante(13);
situacaoEstudante(6.9);
situacaoEstudante(8);
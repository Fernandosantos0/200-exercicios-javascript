'use strict';

function podeVotar(idade) {
    idade = parseInt(idade);

    if(idade > 17 && idade < 71) {
        console.log('Voto obrigatório');
    } else if(idade > 15 && idade < 18 || idade > 70) {
        console.log('Voto facultativo');
    } else {
        console.log('Não pode votar');
    }

}

podeVotar(17);
podeVotar(13);
podeVotar(18);
podeVotar(70);
podeVotar(71);
podeVotar(15 + 3);
podeVotar(65 + 6);
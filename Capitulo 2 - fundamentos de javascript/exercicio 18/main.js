'use strict';

function podeDirigir(idade) {
    
    if(idade > 17) {
        console.log('Você pode dirigir.');
    } else {
        console.log('Você não pode dirigir.')
    }

}

podeDirigir(17);
podeDirigir(7);
podeDirigir(18);
podeDirigir(71);
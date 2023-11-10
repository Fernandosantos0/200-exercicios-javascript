'use strict';

function verificarSemaforo(cor) {
    if(typeof cor !== 'string') cor = '';

    cor = cor.toLowerCase();

    console.log(cor)

    if(cor === 'vermelho') {
        console.log('A cor vermelha indica parar');
    } else if(cor === 'amarelo') {
        console.log('A cor amarela significa diminuir a velocidade');
    } else if(cor === 'verde') {
        console.log('A cor verde é para seguir em frente');
    } else {
        console.log('Sem padrão!');
    }

}

verificarSemaforo('azul');
verificarSemaforo('verde');
verificarSemaforo('amerelo');
verificarSemaforo('vermelho');
verificarSemaforo(15);
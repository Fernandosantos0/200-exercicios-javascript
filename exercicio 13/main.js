'use strict';

function calcularIMC(peso, altura) {
    peso = isNaN(peso) ? 0 : peso;
    altura = isNaN(altura) ? 0 : altura;

    /* Calculando o IMC */
    const imc = peso / (altura * altura);

    /* Estrutura condicional */
    if(imc < 18.5) {
        console.log('Abaixo do Peso');
    } else if(imc >= 18.5 && imc < 25) {
        console.log('Peso Normal');
    } else if(imc >= 25 && imc < 30) {
        console.log('Sobrepeso');
    } else {
        console.log('Obesidade');
    }

};

calcularIMC(60, 1.7);
calcularIMC(80, 1.7);
calcularIMC(90, 1.7);
calcularIMC(74, 1.5);
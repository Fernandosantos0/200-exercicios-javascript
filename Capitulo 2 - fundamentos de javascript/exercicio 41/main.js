let decimal = 10;
let binario = null;
const variavelAuxiiarBinaria = [];

do {
    /* Realizando os cálculos */
    const calc = decimal % 2; // Cálculo do resto da divisão
    decimal = parseInt(decimal / 2); // Dividindo o número por 2 e convertendo para um número inteiro
    
    /* Realizando o push */
    variavelAuxiiarBinaria.push(calc);
} while(decimal > 0)

binario = variavelAuxiiarBinaria.reverse().join('');

console.log(binario);
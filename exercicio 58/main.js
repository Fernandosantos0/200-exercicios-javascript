function somarNumerosPares(numeros) {

    return numeros.reduce((soma, numero) => {
        if(numero % 2 === 0) {
            soma += numero;
        }

        return soma;
    }, 0);

}

const numeros = [1, 2, 3, 4, 5, 8, 9, 10, 12, 11, 7, 13];
console.log(somarNumerosPares(numeros));
function numeroAoQuadrado(numeros) {
    return numeros.map(numero => Math.pow(numero, 2));
}

const novo = numeroAoQuadrado([5, 2, 1, 3, 4]);
console.log(novo);
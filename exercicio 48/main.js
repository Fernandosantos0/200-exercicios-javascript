function parOuImpar(numero) {

    if(numero % 2 !== 0)  return `O número ${numero} é ímpar.`;

    return `O número ${numero} é par.`
}

console.log(parOuImpar(0));
console.log(parOuImpar(10));
console.log(parOuImpar(15));
console.log(parOuImpar(11));
console.log(parOuImpar(4));
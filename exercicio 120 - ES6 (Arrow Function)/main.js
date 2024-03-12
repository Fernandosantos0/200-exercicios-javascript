'use strict'

const incrementar = base => () => ++base;

const incrementaBy5 = incrementar(5);

console.log(incrementaBy5());
console.log(incrementaBy5());
console.log(incrementaBy5());
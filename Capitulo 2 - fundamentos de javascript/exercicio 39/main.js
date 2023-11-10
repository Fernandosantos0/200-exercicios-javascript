'use strict';

let numero = 5;
let fatorial = 1;
for(let num = 1; num <= numero; num++) {
    fatorial *= num; 
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);
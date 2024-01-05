'use strict';

function calcularFibonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let fibonacci = '';

    let i = 0;
    while(i < n) {
        fibonacci = n1 + n2;

        n1 = n2;
        n2 = fibonacci;
        
        console.log(fibonacci);

        i++;
    }
}

calcularFibonacci(15);
'use strict';

for(let i = 1; i <= 100; i++) {
    let soma = 0;
    for(let j = 1; j < 1; j++) {
        if(i % j === 0) {
            soma += j;
        }
    }

    if(soma === i) {
        console.log(i);
    }
}
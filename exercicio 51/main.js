function calcFatorial(numero) {
    let fatorial = 1;
    const n = numero;

    let i = 0;
    while(i < n) {
        fatorial *= numero;
        console.log(numero, i)
        numero--;
        i++; 
    }

    return fatorial
};

console.log(calcFatorial(5));
function combineInPairs(arr) {
    const combinar = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            combinar.push([arr[i], arr[j]]);
        }
    }

    return combinar;
}

const numeros = [1, 2, 3, 4];

console.log(combineInPairs(numeros));
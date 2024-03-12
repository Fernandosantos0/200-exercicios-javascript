'use strict'

function unirArray(...arrays) {
    return [].concat(...arrays)
}

const novoArray = unirArray([1, 2], [3, 4], [5, 6], [7, 8]);
console.log(novoArray);
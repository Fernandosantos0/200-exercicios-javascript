'use strict';

function removeDuplicates(arr) {
    return [...new Set(arr)];

}

const vlrs = [15, 'Canadá', 45, 0, 'Bélgica', true, 15, 'Russia', 'Canadá', true, 'Bélgica', 0, false];

console.log(removeDuplicates(vlrs));
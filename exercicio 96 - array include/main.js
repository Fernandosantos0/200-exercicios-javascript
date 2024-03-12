function isSubarray(mainArray, subArray) {
    return mainArray.join(',').includes(subArray.join(','));
}

const mainArray = [1, 2, 3, 4, 5];
const subArray1 = [2, 3, 4];
const subArray2 = [2, 4, 5];

console.log(isSubarray(mainArray, subArray1));

console.log(isSubarray(mainArray, subArray2));
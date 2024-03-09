function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const middle = Math.floor(arr.length / 2);

    if(arr.length % 2 !== 0) {
        return (arr[middle - 1] + arr[middle]) / 2;
    } else {
        return arr[middle];
    }
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(findMedian(numbers));
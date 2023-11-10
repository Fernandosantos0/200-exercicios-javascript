'use strict';

let boolean1 = undefined || 'Canadá';
let boolean2 = !true;
let boolean3 = 45 > 43 && 12 + 54 + 32 > 100;

let bool1 = true;
let bool2 = false;

console.log('Boolean1:', boolean1);
console.log('Boolean2:', boolean2);
console.log('Boolean3:', boolean3);

console.log('AND', bool1 && bool2); // False
console.log('OR:', bool1 || bool2); // True
console.log('NOT:', !bool1); // False
console.log('NOT:', !bool2); // True
console.log('NOT:', !(bool1 || bool2)); // False
console.log('NOT:', !(bool1 && bool2)); // True
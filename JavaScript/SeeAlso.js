// ===== Search Methods =====

// indexOf() - returns first index of element or -1
const searchArr1 = [1, 2, 3, 2];
console.log(searchArr1.indexOf(2)); // 1

// lastIndexOf() - returns last index of element or -1
const searchArr2 = [1, 2, 3, 2];
console.log(searchArr2.lastIndexOf(2)); // 3

// includes() - checks if array contains element
const searchArr3 = [1, 2, 3];
console.log(searchArr3.includes(2)); // true

// find() - returns first matching element
const searchArr4 = [5, 12, 8];
const firstMatch = searchArr4.find(num => num > 10);
console.log(firstMatch); // 12 

// findIndex() - returns index of first matching element
const searchArr5 = [5, 12, 8];
console.log(searchArr5.findIndex(num => num > 10)); // 1

// findLast() - returns last matching element (ES2023+)
const searchArr6 = [1, 4, 7, 4];
console.log(searchArr6.findLast(num => num === 4)); // 4

// findLastIndex() - returns index of last matching element
const searchArr7 = [1, 4, 7, 4];
console.log(searchArr7.findLastIndex(num => num === 4)); // 3


// ===== Sort Methods =====

// sort() - sorts elements (default: string sort)
const sortArr1 = [4, 1, 3, 2];
sortArr1.sort();
console.log(sortArr1); // [1, 2, 3, 4]

// Numeric ascending sort
const sortArr2 = [10, 5, 8, 1];
sortArr2.sort((a, b) => a - b);
console.log(sortArr2); // [1, 5, 8, 10]

// Numeric descending sort
const sortArr3 = [10, 5, 8, 1];
sortArr3.sort((a, b) => b - a);
console.log(sortArr3); // [10, 8, 5, 1]

// reverse() - reverses order of elements
const reverseArr = [1, 2, 3];
reverseArr.reverse();
console.log(reverseArr); // [3, 2, 1]


// ===== Iteration Methods =====

// forEach() - runs function for each element
const iterateArr1 = [1, 2, 3];
iterateArr1.forEach((value, index) => console.log(`Index: ${index}, Value: ${value}`));

// map() - returns a new array with transformed elements
const iterateArr2 = [1, 2, 3];
const doubledArr = iterateArr2.map(x => x * 2);
console.log(doubledArr); // [2, 4, 6]

// filter() - returns new array with elements passing condition
const iterateArr3 = [1, 2, 3, 4];
const evenNumbers = iterateArr3.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce() - reduces array to single value
const iterateArr4 = [1, 2, 3, 4];
const sumOfElements = iterateArr4.reduce((total, current) => total + current, 0);
console.log(sumOfElements); // 10

// reduceRight() - same as reduce but from right
const iterateArr5 = [1, 2, 3];
const sumRight = iterateArr5.reduceRight((acc, val) => acc + val, 0);
console.log(sumRight); // 6

// every() - returns true if all elements pass test
const iterateArr6 = [2, 4, 6];
console.log(iterateArr6.every(num => num % 2 === 0)); // true

// some() - returns true if at least one element passes test
const iterateArr7 = [1, 3, 5, 4];
console.log(iterateArr7.some(num => num % 2 === 0)); // true

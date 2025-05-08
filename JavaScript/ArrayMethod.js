// Alright! Here’s a simple plan:
// 1. I’ll break each method down into quick, clear notes with examples.
// 2. Then I’ll give you a structured PDF with all notes for quick revision.
// 3. I’ll also suggest a short daily study schedule if you’d like!

// ### 📚 Quick Notes on Array Methods:

// ---

// ✅ **Basic Methods**

// 1. **Array.length**
// - Returns the number of elements in the array.

let arr = [1, 2, 3];
console.log(arr.length); // 3

// 2. **Array.toString()**
// - Converts the array to a comma-separated string.
let arr2 = [1, 2, 3];
console.log(arr2.toString()); // "1,2,3"

// 3. **Array.at(index)**
// - Returns the element at the given index (supports negative indices).

let arr3 = [10, 20, 30];
console.log(arr3.at(-1)); // 30

// 4. **Array.join(separator)**
// - Joins all elements into a string using the specified separator.

let arr4 = [1, 2, 3];
console.log(arr4.join("-")); // "1-2-3"

// 5. **Array.pop()**
// - Removes and returns the last element.

let arr5 = [1, 2, 3];
console.log(arr5.pop()); // 3
console.log(arr5); // [1, 2]

// 6. **Array.push(element)**
// - Adds element(s) to the end and returns new length.

let arr6 = [1, 2];
arr6.push(3);
console.log(arr6); // [1, 2, 3]

// 7. **Array.shift()**
// - Removes and returns the first element.

let arr7 = [1, 2, 3];
arr7.shift();
console.log(arr7); // [2, 3]

// 8. **Array.unshift(element)**
// - Adds element(s) to the beginning.

let arr8 = [2, 3];
arr8.unshift(1);
console.log(arr8); // [1, 2, 3]

// 9. **Array.delete(index)**
// - Deletes the element but leaves an empty slot (not recommended).

let arr9 = [1, 2, 3];
delete arr9[1];
console.log(arr9); // [1, empty, 3]

// 10. **Array.concat()**
// - Merges two or more arrays.

let arr10 = [1, 2];
let arr101 = [3, 4];
console.log(arr10.concat(arr101)); // [1, 2, 3, 4]

// 11. **Array.copyWithin(target, start, end)**
// - Copies part of the array to another location in the same array.

let arr11 = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr11); // [4, 5, 3, 4, 5]

// 12. **Array.flat(depth)**
// - Flattens nested arrays.

let arr12 = [1, [2, [3, 4]]];
console.log(arr12.flat(2)); // [1, 2, 3, 4]

// 13. **Array.splice(start, deleteCount, item1, item2...)**
// - Adds/removes elements from a certain index.

let arr13 = [1, 2, 3, 4];
arr.splice(1, 2, 99);
console.log(arr13); // [1, 99, 4]

// 14. **Array.toSpliced()**
// - Like `splice()`, but returns a new array without modifying the original.

let arr14 = [1, 2, 3, 4];
let newArr = arr.toSpliced(1, 2, 99);
console.log(newArr); // [1, 99, 4]
console.log(arr14); // [1, 2, 3, 4]

// 15. **Array.slice(start, end)**
// - Returns a shallow copy of a part of the array.

let arr15 = [1, 2, 3, 4, 5];
console.log(arr15.slice(1, 4)); // [2, 3, 4]

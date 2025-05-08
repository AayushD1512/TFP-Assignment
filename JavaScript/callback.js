/*
    callback = a function that is passed as an argument to another function
               used to handle asychronous operations:
               1. Reading a file
               2. Network Requests
               3. Interacting with Databases

               "Hey, when you're done, call this next"
*/

sum(display, 2, 4);

function sum(callback, x, y) {
    setTimeout(() => {
        let res = x + y;
        callback(res);
    }, 3000);
}

function display(res) {
    console.log("The sum is:", res);
}


// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
// document.getElementById("demo").innerHTML = posNumbers;
console.log(posNumbers)

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

//.forEach on lets say an array takes a callback and if you pass any variable first it will print values, then for 2nd var it'll print index, then
// for 3rd var it'll print whole array
myNumbers.forEach(function(fir, th, arr){
    console.log(fir,th,arr);
})
// Can declare objects in two ways: const obj = new Object();
//                                  const obj = {};

const car = {
  name: "Buggati",
  model: "Chiron",
  topSpeed: 210,
  price: 4.2 + " Million",
};

console.log(car.price);
console.log(
  "This is " +
    car.name +
    " " +
    car.model +
    " has a top speed of " +
    car.topSpeed +
    "." +
    " You can buy this at " +
    car.price
);
console.log("\n");

const food = new Object();
food.name = "Peanut Butter Sandwhich";
food.calorie = 540 + " calories";
food.ingridient = "Bread and Peanut Butter";
food.price = 40;

console.log(food.name);
console.log(food.ingridient);
console.log(food.price);
console.log("\n");

const obj = {
  name: "Hello",
  age: 20,
  2: "Fighter",
};
// Following are two ways to access diff types of key:value pairs in and object.

console.log(obj.name);
console.log(obj[2]);
console.log("\n");

// Can also create some Object Methods within Objects that can be later accessed to perform as designated.
const person = {
  fName: "John",
  lName: "Doe",
  age: 20,
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};
// In the example above, this refers to the person object:

// this.firstName means the firstName property of person.

// this.lastName means the lastName property of person.

console.log(person.fullName());

console.log("\n");

// We can even delete from an object
// The delete keyword deletes both the value of the property and the property itself.

// After deletion, the property cannot be used before it is added back again.
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person2.age;
console.log(person2.age);
console.log("\n");

// We can even create and access nested objects
myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.myCars.car2);
console.log("\n");

// we can also output the whole object on console.
console.log(myObj);

// We can run loop over object as well as following:
let text = "";
for (let x in person2) {
  text += person2[x] + " ";
}
console.log(text);

//We can create an array by using .value() of the object
const arr = Object.values(person2);
console.log(arr);

/*
  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  Spread Operators in JS 
  The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


*/

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

//The spread operator is often used in combination with destructuring
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(rest);

//We can use spread operators with objects too
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was 
// passed, updateMyVehicle. The resulting color is now yellow.
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

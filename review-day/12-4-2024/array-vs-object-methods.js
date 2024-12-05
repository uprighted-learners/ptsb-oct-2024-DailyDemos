const myObj = { x: 3}


// most of the "Object methods" are use by calling the global Object object and passing
// in the object you want to modify to one of it methods
Object.freeze(myObj)
myObj.x = 5
myObj.y = 6

// there a few methods that can accessed dirtectly on the object
myObj.hasOwnProperty("x"); // check if a property is on an object
console.log(myObj)


// Array allows you to access pretty much all of the array methods
// directly on the array itself
const numbers = [1, 2, 3];
console.log(numbers.find((x) => x > 1));


// there are a few methods on the Global array as well
console.log(Array.from("string"));

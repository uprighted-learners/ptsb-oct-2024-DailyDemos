// 4 main pieces to remember about array methods

// 1. the array methods can take in a value (parameter/argument)

// 2. it does something

// 3. it returns a value

// 4. it may or may not affect the original array

// how does push() work within the framework above?
// 1. take in an element or multiple elements
// 2. it adds an element to the end of that array
// 3.  returns the new length of the array
// 4. yes it affects the original array





// these are different from the properties

// for the length property .length

// for methods you have to execute them, methods == functions

const fruits = ["apple", "banana", "cherry"];

fruits.push; // this doesn't work it needs to be executed like a function

console.log(fruits); // didn't do anything


// push()

// often these will take parameters, but we must execute them
console.log(fruits.push("watermelon"));

console.log(fruits);

// pop()

console.log(fruits.pop()) // get back the last item
console.log(fruits)

// shift()
let fruit = fruits.shift();
console.log(fruit) //takes index 0 from array
console.log(fruits)

// unshift() - add something to the beginning of the array
fruits.unshift(fruit)
console.log(fruits)

// slice() - returns a copy of portion of array
const companies = ["Apple", "Google", "Netflix", "Disney"]
console.log(companies.slice(1,3))// from index 1 to before index 3
console.log(companies.slice(2)) // get from index 2 to the end
console.log(companies)

// join()
const elements = ["fire", "water", "earth", "air"]
const elementsCombined = elements.join(" - ");
console.log(elementsCombined); // converts our array to a string and adds a separator
console.log(elements)

// splice() - remove elements in place on the array, optionally we can replace them in place
const techCompanies = ["Apple", "Google", "Netflix", "Disney"];
console.log(techCompanies.splice(2, 1))
// what will the existing array look like
console.log(techCompanies)
console.log(techCompanies.splice(2, 1, "Intel"));
// what will the existing array look like
console.log(techCompanies);


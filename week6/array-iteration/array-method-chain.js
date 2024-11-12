let numbers = [1, 2, 3, 4, 5];
// Double each number and find all number greater than 5

// intermediate variables that you assign values to
// this helps with testing / debugging
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
const filteredNumbers = doubledNumbers.filter((num) => num > 5);
console.log(filteredNumbers);

// method chaining example
let result = numbers //  [1, 2, 3, 4, 5]
  .map((num) => num * 2) // [2, 4, 6, 8, 10]
  .filter((num) => num > 5);

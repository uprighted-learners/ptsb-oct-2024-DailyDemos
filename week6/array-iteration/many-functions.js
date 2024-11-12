// many many ways to write functions because coding can confusing

// arrow functions
// they all do the same thing with different syntax
//const newArray = numbers.map(x => x * 2); // shortest form - excluded return / parens / curlys
//const newArray = numbers.map((x) => x * 2);
//const newArray = numbers.map(x => { return x * 2 });
//const newArray = numbers.map((x) => {return x * 2} ) // remember this way

// you can also do these with function expressions
// const multiplyByTwo = (x) => {
//   return x * 2;
// };

// end arrow function examples

//normal function
// function multiplyByTwo(x){
//     return x * 2;
// }
// const newArray = numbers.map(multiplyByTwo) // passing in normal function as callback
// end normal function example

// function scoped to map
// const newArray = numbers.map(function multiplyByTwo(x) {
//   return x * 2;
// });

// anonymous function
const newArray = numbers.map((x) => {
  return x * 2;
});

console.log(numbers); // did the array change?
console.log(newArray);

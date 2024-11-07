//process.stdin -> function that takes in keyboard strokes from the terminal

//.once - just process it once
// once has two parameters

// 1. "data" - waiting for data to come from the terminal

// 2. arrow function - does something with the data and take it in as a parameter

console.log("Type in your name:");

function handleInput(input) {
  console.log("Hello, ", input.toString());
}

process.stdin.once("data", handleInput); // notice how the handleInput wasn't executed - handleInput is a callback function

// this is because inside of once it takes this function and executes it

// function once(type, handler){
//   //do its thing
//   let input = "Upright"
//   handler(input)
// }

//if you execute it it will look like this
//process.stdin.once("data", undefined);

console.log("Type in your name:");

process.stdin.once("data", (input) => {
  console.log("Hello, ", input.toString());
});

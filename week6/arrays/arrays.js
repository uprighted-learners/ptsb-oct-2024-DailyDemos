const letters = ["a", "z", "b"];

for (let letter of letters) {
  console.log(letter);
}

console.log(letters[1]);

const numbers = [7, 44, 18, 4, 6, 5, 5486830.1584, 15, 27, 64, 4, 5, 24, -13];

console.log(numbers[6]);

const emoji = ["💰"];

console.log(emoji);

// why not have a mix of array values? - use the same type in most that
let mix = ["hello", "89", "world", true, 98, false];

for (let i = 0; i < mix.length; i++) {
  console.log(mix[i] + 6);
}

const fruits = ["apple", "banana", "cherry"];

//  index 0 is used

console.log(fruits[0]);

//length

console.log(fruits.length);

console.log(fruits[fruits.length - 1]);

// what happens if we go off the end of an array?

console.log(fruits[5]); // gives us undefined. so do don't do that

// how to add items to our fruits array

console.log(fruits);

fruits[3] = "kiwi";

console.log(fruits);

fruits.push("watermelon"); // this is the typical way to add items to an array

console.log(fruits);

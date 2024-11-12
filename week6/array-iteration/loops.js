let fruits = ["apple", "banana", "cherry"];

// i++ is shorthand for i = i + 1

// increment by 3 - i = i + 3

// standard for loop for iteration
// if need control over the index
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// i want to skip one each time
for (let i = 0; i < fruits.length; i = i + 2) {
  console.log(fruits[i]);
}

// for .. of loop
const candies = [
  "Pulparindo",
  "Chocolate",
  "Haribo Gummies",
  "Dark Chocolate",
  "Twix",
];

// for of is a goto - avoids infinite loops and is simpler
for (const candy of candies) {
    //print out each candy
    console.log(candy)
}

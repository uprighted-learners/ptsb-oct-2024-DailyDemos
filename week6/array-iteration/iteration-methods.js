// built in methods on every array

// we could do all of these by ourselves with a for loop
// put JS gives us an easier way

// map() start
// transform the items in the array and create a new array with of the same length
// [1, 2, 3, 4] => multiply these by 2 => [2, 4, 6, 8]

const numbers = [1, 2, 3, 4];

// anonymous function
const newArray = numbers.map((x) => {
  return x * 2;
});
console.log(numbers); // did the array change?
console.log(newArray);

// map give the ability to not have to write this over and over again
// const myNewArray = [];
// for (const number of numbers){
//     myNewArray.push(number * 2)
// }
// console.log(myNewArray)

// end map()

//
// or you could just have
// numbers.map(x => x * 2 );

// forEach()
// is similar to the for of method
// chaining or you want to use shorthand for the for .. of
const trees = ["Pine", "Maple", "Redwood"];
trees.forEach((tree) => {
  console.log(tree);
});

// end foreach()

// reduce()
// transforms array into ANYTHING!!!

// accumulator -> total from an array
const budget = [100, 200, 14.84, 100000, 50, 2000, 1234, 5312];
// simple reduce
const total = budget.reduce((total, currentItem) => {
  return total + currentItem;
}, 0);
console.log(total)


// this replaces having to do the following
let totalBudget = 0;
for( const budgetItem of budget){
    totalBudget = totalBudget + budgetItem;
    // optionally
    // totalBudget += budgetItem;
}
console.log(totalBudget)

// complex reduce
const budgeTwo = [100, 200, 14.84, 100000, 50, 2000, 1234, 5312];
// our goal is to get a array with half the amount of items but in sub arrays
// [[100, 200], [14.84, 100000], [50, 2000], [1234, 5312]]

// another goal could be adding just two values together and then putting those into an array
// [300, 100014.84, 2050, 6546]

// another goal could be to create an object from the array with key value pairs
// {
//    "a": 100,
//    "b": 200
//       ...
// }

// end reduce

// filter()
// creates a new array for each item that is true from the callback
// "filter in"
let animals = ["dog", "cat", "elephant", "bird", "dolphin"];

const filteredAnimals = animals.filter((animal)=> animal.length > 3)

console.log(filteredAnimals)


// what does this give us?

const newAnimalList = [];
for( const animal of animals){
    if(animal.length > 3){
        newAnimalList.push(animal)
    }
}
console.log(newAnimalList)


// find ()
// locate and return the first item that matches the callback

const places = ["New York", "Vegas", "D.F."]

const found = places.find((x) => x.length > 3)
console.log(found)
console.log(places)
//what does this give us

let foundIt;
for( const place of places){
    if(place.length > 3){
        foundIt = place
        break; // exits the for loop for us
    }
}
console.log(foundIt)
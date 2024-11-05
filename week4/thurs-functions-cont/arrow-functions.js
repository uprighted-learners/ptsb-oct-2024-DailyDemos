// basic  function

function openDoor(){
    return "I opened the door";
}

const openDour = () => { return "I opened the door"}

console.log(openDoor())

console.log(openDour());

// parameter and have a return value

function add(x,y){
    return x +y
}
// (x, y) => { x + y}

// higher order functions

// take in functions as parameters

// an array a list of typical the same data types

const numbers = [1,5,55,60,75]

// returns a boolean value
// takes in a number
// returns true if that number is greater than 10
function numIsGreaterThan10(x){
    return x > 10
}


//this is more advanced we will cover higher order functions later on
console.log(numIsGreaterThan10(22))

console.log(numbers.find(numIsGreaterThan10)); // passing in reference to function

console.log(numbers.find((x)=> x > 10))




// first arrow function

// function getPunctuation(phrase){
//    return phrase + "!";
// }

// console.log(getPunctuation("Happy Halloween"))

const getPunctuation = (phrase) => {
    return phrase + "!";
}

console.log(getPunctuation("Happy Halloween"));
















// three logical operators

// AND => &&
// OR => ||
// NOT => !


// && - include this in the evaluation
// is both 1 and 2 greater than 0
// both sides of AND/&& must be true
// in order to return a true boolean
let greaterThanZero = 1 > 0 && 2 > 0;
console.log(greaterThanZero)


// OR ||
// this allows us to have one or more
// expressiong and if any of them are true
// then return a true boolean value

const color = "red"
let isColorRedOrBlack = color === "red" || color === "black"
console.log(isColorRedOrBlack)

// NOT !
// we are inverting the value of a boolean
// so if isSunny is true
// !isSunny is false

const isSunny = false;

// we only want to do something when its not sunny
if(!isSunny){
    console.log("aint no sunshine")
} 


// store 

let isOpen = true;

if(!isOpen){
    // lock the door
    // turn off the sign
    // go home and watch netflix
    // and play video games
}



// use an intermediate variable to hold
// complex conditionals isColorRedOrBlack && greaterThanZero


// Short circuit evaluation
let num1 = 10
let num2 = 5
if (num1 < 45 || num2 > 10) {
  // only num1 < 45 runs
  // then it immediately goes to the next line below
  console.log("we made it");
}


// Code is about readability
// code is read about 10/1 to the time it takes to write it
// writing readable code is really  helpful

// conditionals

// wrap all of your math in () so you don't have to get order of operations correct
// * / + -
//if( (a + b) * ((c / d) - 100))

// complex conditionals

// extract all of the pieces in variables
// it helps to explain the why behind the values
// its easier to read
// its easier to debug

// less readable

x = 0;
y = 100;
z = 84;

if(x < 32 && y > 212 && z === 72){
}

// more readable

// extract out our constants as named values
const FREEZING = 32;
const BOILING = 212;
const ROOM_TEMP = 72;
if (x < FREEZING && y > BOILING && z === ROOM_TEMP) {
}


const isWithinFreezingTolerance = x < FREEZING;
const isBoiling = y > BOILING;
const isWithinRoomTemp = z === ROOM_TEMP;
const isWithinTempRange = isWithinFreezingTolerance && isBoiling && isWithinRoomTemp;
// more readable
// extract out our constants as named values
if (isWithinTempRange) {
}



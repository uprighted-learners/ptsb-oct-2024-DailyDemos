// STANDARD IF STATEMENT

let isSunny = true

// if it is sunny outside
// then go ahead and say "It's a nice day!"
if (isSunny) {
  // if isSunny is true
  // then all the code in this code block will run
  console.log("It is Sunny");
} 

//END STANDARD IF STATEMENT


// IF/ELSE 

let isNight = false;

if(isNight){
    //run this code if isNight is true
    console.log("It's nighttime")
} else {
    //otherwise run this block of code
    //if isNight is false then run the code here
    console.log("nope... it's daytime")
}

// END IF/ELSE


// If/ else if

let temp = 65

if(temp > 55){
    // do some stuff here
    console.log("Temp > 55")
} else if(temp > 60) {
    console.log("its freezing in here, literally")
}

// multiple ifs
// each if by itself is evaluated independantly
let temp2 = 31;

if (temp2 < 40) {
  // do some stuff here
  console.log("Temp < 40");
}

if (temp2 < 32) {
  console.log("its freezing in here, literally");
}


// multiple else ifs ending in an else

// if / else if / else if /.... else

let greeting = "hello";

if (greeting === "goodbye") {
  console.log("was goodbye")
} else if (greeting === "hola") {
  console.log("was hola");
} else if (greeting === "howdy") {
  console.log("was howdy");
} else {
  // runs if all the other conditions failed (false)
  console.log("will this run?");
}


// really complex else if
// generally you dont go more than 2-3 levels deep
// never hard code true or false
if(true){
    if(true){
        if(true){

        } else{
            if(true){

            } else if (true) {
            }
        }
    }
}
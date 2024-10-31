function add(x, y){
    // x and y are only available here within this scope
    console.log(x)
    console.log(y)
    return x + y;
}


//console.log(x) // what will be console logged here?

console.log(add(1, 2))
console.log(add(10, 20))
console.log(add(5, 15))


//why not just use a variable outside of the function?

let greeting = "Sup,"
let name = "Max"
function getGreeting(){
   return greeting + " " + name
}


//someone might come along and change the values of greeting or name
// for their own purposes and cause us issues

greeting = "Hey there,"
function getAnotherGreeting(){
    return greeting;
}

console.log(getGreeting())


function getWorkingGreeting(greeting, name){
       return greeting + "hope you are well " + name;
}

console.log(getWorkingGreeting("Sup Dude,", "Max"))





//passing in variables to functions


//turns a lowercase string into uppercase
function shout(someString) {
    //myString turns into someString

    // do not reference myString in here
    console.log(someString)
  let loudString = someString.toUpperCase();
  return loudString + "!!!";
}
let myString = "hello world";
let myShoutString = shout(myString);
console.log(myString);
console.log(myShoutString);
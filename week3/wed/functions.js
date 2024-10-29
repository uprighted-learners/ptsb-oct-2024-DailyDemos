// function definition
//keyword - function
// name - action
// parenthesis 
// optional parameters
// curly braces 
function add(x, y){
  // 1 becomes x
  // 2 becomes y
  return x + y;
}

// function call - executing/running/
let finalNumber = add(1, 2)
console.log(finalNumber)


// no parameter function
function getTemperature(){
    return 72;
}

// getTemperature() is the function call
// without the function call the function is useless
// like a car that hasn't been started
console.log(getTemperature())



//what is the difference between these two?

getTemperature
getTemperature()

console.log(getTemperature);
console.log(getTemperature())


//definition
function add(x, y){
  return x + y;
}

//call
add(1,2)

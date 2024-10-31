//function keyword

// name (action)

// parameters

// {} - code block

function getGreeting(timeOfDay, name) {
    return "Good " + timeOfDay + ", " + name;
}

const greeting = getGreeting("morning", "John")
const greeting2 = getGreeting("evening", "John");
const greeting3 = getGreeting("night", "John");

console.log(greeting)
console.log(greeting2)
console.log(greeting3)

// this will not execute you are just pointing at the car
getGreeting
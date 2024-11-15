// creating methods
const dog = {
    name: "tulip",
    color: "grey",
    speak() {
        console.log("Bark")
    },
    dig(depth, location){
        console.log(`tulip dug you a new ${depth} foot hole in the ${location}`)
    }
}

// Calling Methods
dog.speak();
dog.dig(100, "back yard");
dog.dig(1000, "your neighbor's yard");
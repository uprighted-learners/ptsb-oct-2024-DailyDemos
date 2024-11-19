const height = 100;

const rectangle = {
    height: 10,
    width: 8,
    // Create a method for calculating the area of the rectangle
    area: function () {
        return this.height * this.width; // this helps us to refer to the right variable - height/width properties
    }
}

console.log(rectangle.area())

// this with normal functions
const dog = {
  name: "tulip",
  color: "grey",
  speak: function() {
    console.log(`My name is ${this.name} and I am a ${this.color} pup`);
  },
  dig: function(depth, location) {
    console.log(`tulip dug you a new ${depth} foot hole in the ${location}`);
  },
};

dog.speak() //name and color should be logged


// this with arrow functions
const dogTwo = {
  name: "tulip Two",
  color: "grey",
  // dont use arrow functions inside of objects (don't use them as methods)
  speak: () => {
    console.log(`My name is ${this.name} and I am a ${this.color} pup`);
  },
  dig: function(depth, location) {
    console.log(`tulip dug you a new ${depth} foot hole in the ${location}`);
  },
};

dogTwo.speak() //name and color should be logged
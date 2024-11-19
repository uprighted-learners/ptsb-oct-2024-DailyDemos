// Parent class
class Animal {
  constructor(name) {
    this.name = name;
    // see extends for how to use super
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
  identifyParentClass() {
    return "I am an Animal";
  }
}
// Child class
class Dog extends Animal {
  speak() {
    // override
    return `${this.name} barks.`;
  }
}

class Pig extends Animal {
  speak() {
    return `${this.name} oinks.`;
  }
}
// Creating an instance of the Dog class
let dog = new Dog("Tulip");
let pig = new Pig("Babe");

console.log(dog.speak());
console.log(pig.speak());
console.log(pig.identifyParentClass());
console.log(dog.identifyParentClass());

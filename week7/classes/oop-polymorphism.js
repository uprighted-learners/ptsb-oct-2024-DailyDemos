// Polymorphism
// Many forms


// this blends the concepts of
   //- Inheritance
   //- list of the same base class

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}
// Child class
class Dog extends Animal {
  speak() {
    // override
    return `${this.name} barks.`;
  }
  fetch(){
    //fetch the thing
  }
}

class Pig extends Animal {
  speak() {
    return `${this.name} oinks.`;
  }
  herd(){
    // herd the sheep
  }
}

let jaguar = new Animal("jag")
let dog = new Dog("Tulip");
let pig = new Pig("Babe");

const animals = [jaguar, dog, pig]; // array of "Animals"
 
for( const animal of animals){
    console.log(animal.speak())
}


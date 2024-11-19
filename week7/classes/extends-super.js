// Run through this with the debugger

// put break points on every line
// then hit the play button

// Extends Keyword

// Dog
// Sheep
// Cat

class Animal {
  constructor(name, isMammal) {
    this.name = name;
    this.isMammal = isMammal;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

// Dog is the child class
// it "extends" animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name, true); // calling Animal's constructor here

    // when super(name)
    //
    this.breed = breed; // setup our child class properties
  }
}

const dog = new Dog("Tulip", "mutt");
console.log(dog);

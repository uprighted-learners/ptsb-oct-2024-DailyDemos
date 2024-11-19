// class Keyword

// Name of our Class 
  // - Anything we want
  // - PascalCase
  // - Same naming conventions as variable
  //   - use letters
  //   - Noun
  //   - singular

// curly braces  
class Pizza {

    constructor(size, toppings){
        this.size = size; // this.size is internal to the class - there will now be a size
                          // property on the object that is created from this class obj.size
        this.toppings = toppings; // obj.toppings
    }

    // method called describe - obj.describe()
    describe(){
        return `This is a ${this.size} inch pizza, with ${this.toppings.join(", ")}.`
    }

}

// to create the Pizza - we create an object from the blueprint

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

const meal = new Pizza(16, ["Pineapple", "Black Olives", "Octopus"]) 

console.log(meal.describe())

// same outcome as creating our own object but we have a way to make lots of them
// let meal = {
//  size: 16,
//  toppings: ["Pineapple", "Black Olives", "Octopus"]
//  describe: function{
  //      return `This is a ${this.size} inch pizza, with ${this.toppings.join(", ")}.`
//    }
//}

// create multiples
const dinner = new Pizza(20, ["Pepperoni, Low-Moisture mozzarella"]);
console.log(dinner)
console.log(dinner.describe())
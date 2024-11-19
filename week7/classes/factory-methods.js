class Car{
    // creates the object
    // sets our properties
    // returns back the object so it can be assigned to a variable
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
       //return the new object to the caller
    }

    // normal method
    drive(){
        return `${this.make} ${this.model} is driving!`
    }

    // factory method (it has to be static)
    // Factory methods help set up an object in a specific way
    // method you can call directly from the Class
    static createCar(make, model, year){
        // if make model and year were all objects
        // make = new Make(make)
        // model = new Model(model)
        // year = new Year(year)
        return new Car(make, model, year)
    }

    //static method
    // explain class
    static explainYourself(){
        return "I am a class that makes Cars."
    }

}

// non static method
//Car.drive(); // normal methods cant be called on the Class itself
// create the object first
const civic = new Car("honda", "civic", "2020"); 
// then I can call the "normal" method
console.log(civic.drive())

// but static methods
console.log(Car.explainYourself())
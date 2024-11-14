// object
// opening {
// keys
// :
// value (any datatype : array, string, number, boolean, object)
// commas
// ending }
const car = {
  color: "red",
  make: "honda",
  model: "civic",
};

// color, make, model - keys
// "red", "honda", "civic" - value

// similar to CSS but!

// the keys are not keywords
// the values are not bound by anything but being data types

const tulip = {
  species: "dog", // string
  color: "grey",
  spayed: true, // boolean
  breeds: [
    "Dachhund",
    "Boston Terrier",
    "Shar Pei",
    "bulldog",
    "PUG",
    "coton de tulaer",
    "catdog",
    "husky",
  ], //array
  weight: 14, //number
  favoriteActivity: "chasing tail",
};

// ACCESSING VALUES

// grab 2 values using dot notation and console log them
console.log(tulip.color);
console.log(tulip.weight);
// grab 2 values using the bracket notation
console.log(tulip["favoriteActivity"]);
console.log(tulip["spayed"]);

// grab one of the breeds given
console.log(tulip.breeds[4]);

// ASSIGNING VALUES

// add new properties with . or [] notation

tulip.age = 19;
tulip["Favorite Day of the Week"] = "Sunday";
console.log(tulip.age);
console.log(tulip["Favorite Day of the Week"]);

// update existing values
console.log(tulip.weight);
tulip.weight = 13;
console.log(tulip.weight);

console.log(tulip); // log out object

// more complex object

const tire = {
  tireMake: "Good Year",
  age: 3,
};

const battery = {
  warrantyLeft: 2,
  good: true,
};

const anotherCar = {
  make: "Honda",
  model: "Civic",
  year: 2014,
};

// combined???

const combinedCar = {
  make: "Honda",
  model: "Civic",
  year: 2014,
  battery: { warrantyLeft: 2, good: true },
  tire: { tireMake: "Goodyear", age: 3 },
};

// another example (generally we try to keep models (another word for object) flat , or not too nested)

let alice = {
  name: "Alice Abrams",
  homeAddress: {
    city: "Springfield",
    street: "12 Maple St.",
    location: {
      latitude: 44.4759,
      longitude: -73.2121,
      combinedLatLong: [44.4759, -73.2121],
    },
  },
  pets: ["Mittens", "Fido"],
};

// get the street address
console.log(alice.homeAddress.street)
// get the value of "Fido"'
console.log(alice.pets[1])
// get the -73.2121 on the combinedLatLong
console.log(alice.homeAddress.location.combinedLatLong[1])


// Two of the Object Methods

// Object.keys() - put your object in as an argument

console.log(Object.keys(alice)) // notice this doesn't give us back the nested keys
console.log(Object.keys(alice.homeAddress))
console.log(Object.keys(alice.homeAddress.location))

// Object.values() - put the object in as an argument 

console.log(Object.values(alice))

const values = Object.values(alice)

for ( const value of values){
    console.log(value);
}

/// Delete from an object

console.log(alice.homeAddress)

delete alice.homeAddress

console.log(alice.homeAddress)
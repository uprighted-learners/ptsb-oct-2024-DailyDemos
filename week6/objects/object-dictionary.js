let stateCapitals = {
  California: "Sacramento",
  "New York": "Albany", // space in key requires it to have quotes
  Texas: "Austin",
  Florida: "Tallahassee",
};

// this could be an array

const stateCapitalsList = ["Sacramento", "Albany", "Austin"];

stateCapitalsList[2]; // Austin

//

console.log(stateCapitals.California); // dot notation
console.log(stateCapitals["New York"]); // bracket notation

console.log(Object.keys(stateCapitals)); // instead of maintaining a states and capitals list
console.log(Object.values(stateCapitals));

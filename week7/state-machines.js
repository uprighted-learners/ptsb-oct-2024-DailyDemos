// Traffic Light

let states = {
  green: ["yellow"], /// green => yellow
  yellow: ["red"], // yellow => red
  red: ["green", "yield"], // red => green || yield
  yield: ["red"], // yield => red
};

// set up the initial state
let currentState = "green";

function enterState(newState) {
  // grab valid states from the lookup table

  let validTransition = states[currentState];

  // check if newState is valid or not
  if (validTransition.includes(newState)) {
    currentState = newState;
    console.log("the light is now " + currentState);
  } else {
    console.warn(
      "Invalid state transition from " + currentState + " to " + newState
    );
  }
}

enterState("yellow");
//enterState("green") // warning
enterState("red");
enterState("yield");
enterState("red");
enterState("green");

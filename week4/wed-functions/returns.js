//implicity return undefined in any function without a return
// or that just has a return with no value

function doesNothing() {}
console.log(doesNothing()); //returns undefined

function alsoDoesNothing() {
  return;
}

console.log(alsoDoesNothing());

//what is happening when we call a function?

console.log(doesNothing());

//doesNothing gets called first

// the computer then returns the return value an puts it into the parenthesis

// console.log(undefined)

// you will see undefined in the console

function returnNum() {
  return 10;
}

console.log(returnNum());

const num = returnNum();

// const num = 10

// num is now 10

/// returns will block any further execution within that code block

function getName() {
  const name = "Upright";
  return name;
  console.log(name);
}

getName();

// within that code block

function getNum() {
  const someRandomBoolean = true;
  if (someRandomBoolean) {
    return 10;
  }
  console.log("hello");
}

console.log(getNum());

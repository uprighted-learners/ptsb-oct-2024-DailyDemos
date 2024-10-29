// let x = 10 - initialization - a
// x < 11 - condition - b
// x++ afterthought - c
// { } - code block / statement - d
// e - going to next executable line outside of the for loop and block - console.log("all done");

// a runs once at the beginning

// b will run to determine if we will go into section d

// d runs if b was true

// c runs to update our initialization value

// e runs once the condition is false

for (let i = 2; i < 11; i++) {
  console.log(i);
}

console.log("all done");

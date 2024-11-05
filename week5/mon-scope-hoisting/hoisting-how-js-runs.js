var PI;
// moreStuff() // this will cause error
// let moreStuff = () => {console.log("more stuff added")}

function addStuff(x, y) {
  var i;
  console.log("about to add stuff");

  const sum = x + y;
  name = "Upright";

  for (var i = 5; i < sum; i++) {
    // dont use var
    console.log(i);
  }

  console.log(i, "i is here");

  return sum;
}
//this is how code looks when
addStuff();

numbers = [1, 2, 3, 4, 5];

var PI = 3.14;

addStuff(numbers[0], numbers[1]);

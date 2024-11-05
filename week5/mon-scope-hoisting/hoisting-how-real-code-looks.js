//this is how your code would look
//when you write it
let numbers = [1, 2, 3, 4, 5];

function addStuff(x, y) {
  console.log("about to add stuff");

  const sum = x + y;
 
  
  for (var i = 5; i < sum; i++) {
      console.log(i);
  }

  return sum;
}


var PI = 3.14;

addStuff(numbers[0], numbers[1]);

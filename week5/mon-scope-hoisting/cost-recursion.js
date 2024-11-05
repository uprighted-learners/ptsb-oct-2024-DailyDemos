function totalCost(cart) {
  if (cart.length === 0) {
    // 2. base case - where you will exit - avoid infinite loop
    return 0;
  }
  return cart[0] + totalCost(cart.slice(1)); // 3. always calls itself
}

const cart = [10, 15, 7, 20];
console.log(totalCost(cart)); // 1. initial call from outside - we get 52

// this is what happens within the function over time
// 1st call
// function totalCost(cart){
//     return 10 + 42;
// }

// // 2nd call
// function totalCost(cart){
//     return 15 + 27;
// }

// // 3rd call
// function totalCost(cart){
//   return 7 + 20;
// }

// // 4th call
// function totalCost(cart) {
//   return 20 + 0; // 3. always calls itself
// }

// // 5th call
// function totalCost(cart) {
//     if (cart.length === 0) {
//         // 2. base case - where you will exit - avoid infinite loop
//      return 0;
//     }
// }

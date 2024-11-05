//what is factorial

//4! = 4 x 3 x 2 x 1 = 24

//5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
  if (n == 0) return 1;
  const calculatedValue = n * factorial(n - 1);
  return calculatedValue;
}

console.log(factorial(5)); // 120

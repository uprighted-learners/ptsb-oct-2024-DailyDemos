// what are promises

// wait at line in our code and get back a specific value or response, a no response, or an error

// when are they used

// async operations
// operations with variable return times
// or operations that aren't directly in our control
// i/o
// calling an external system
// setTimeout

// async await sync

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWeatherData() {
  const ms = getRandomNumber(1000, 20000);
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Weather Data after ${ms}ms`), ms)
  );
}
async function example() {
  console.log("Start of async function");
  let data = await getWeatherData();
  console.log(data);
  let data2 = await getWeatherData();
  console.log(data2);
  console.log("End of async function");
}
console.log("Before calling async function");
example();
console.log("After calling async function");

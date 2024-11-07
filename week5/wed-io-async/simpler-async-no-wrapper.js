function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function example() {
  console.log("Start of async function");
  await delay(2000);
  console.log("After 2 seconds");
  await delay(1000);
  console.log("After another 1 second");
  console.log("End of async function");
}
console.log("Before calling async function");
example();
console.log("After calling async function");

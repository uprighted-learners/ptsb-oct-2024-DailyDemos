let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 2000);
});
// myPromise.then((result) => {
//   console.log(result);
//   // Prints "Done!" after 2 seconds
// });
myPromise();

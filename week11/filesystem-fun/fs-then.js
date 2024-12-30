const fs = require("fs/promises");

console.log("Starting Async Example....");

// write to the hello.txt file
fs.writeFile("hello.txt", "Goodbye Moon")
  .then(() => console.log("File Written asynchronously"))
  .catch((err) => console.error(`Error while reading file: ${err}`));

// read hello.txt file  
fs.readFile("hello.txt", "utf-8")
  .then((data) => console.log(`Got the awesome file: ${data}`))
  .then(() => console.log("Done with Async Example"))
  .catch((err) => console.error(`Error while reading file: ${err}`));

 
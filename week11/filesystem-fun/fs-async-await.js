const fs = require("fs/promises");

async function writeFile() {
  console.log("Starting Async Example....");

  try {
    await fs.writeFile("hello.txt", "Goodbye .then syntax");
  } catch (err) {
    console.error(`Error while reading file: ${err}`);
  }
  //instead of then we have the next line of code
  console.log("File Written asynchronously");
}

//convert the readfile to async await with another
//function call and definition readFile

writeFile();

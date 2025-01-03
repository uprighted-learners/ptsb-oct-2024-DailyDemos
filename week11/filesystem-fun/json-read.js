const fs = require("fs/promises");

async function readJson() {
  console.log("Starting Async Example....");

  try {
    const jsonData = await fs.readFile("example.json", "utf-8");
    console.log("JsonData", jsonData);

    // parse the json

    //without parsing the json

    console.log(jsonData.id);
  } catch (err) {
    console.error(`Error while reading file: ${err}`);
  }

  console.log("File Written asynchronously");
}

readJson();

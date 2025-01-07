const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

app.use(express.json());

const DB_URL = "mongodb://localhost:27017";
// new mongo client
const client = new MongoClient(DB_URL);

async function dbConnect() {
  // establish connection with the database process
  await client.connect();
  // create a database or connect if one exists
  const db = await client.db("Upright");
  // create a collection within our new database
  const collection = await db.collection("Students");
  return collection;
}

//grab all of the student data

app.get("/getStudents", async (req, res) => {
  try {
    const connect = await dbConnect();
    const studentList = await connect.find({}).toArray();
    res.status(200).json({
      studentList,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen("5432", () => {
  console.log("We are listing to port 5432");
});

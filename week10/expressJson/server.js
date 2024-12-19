// three thing to do

// 1. import express
// 2. create the app
// 3. define the port

const express = require("express");
const app = express();
const port = 3000;

// have our app listen

// add json middleware
app.use(express.json());

app.post("/login", (req, res) => {
  console.log("Login info:", req.body);
  res.send("You logged in!");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  res.json(users);
});

app.listen(port, () => {
  console.log("listening....");
});

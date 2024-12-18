import express from "express";

const app = express();

const port = 3000; //localhost:3000/

app.use(express.json()); // parse json body

// .get GET Http method
// first param of "/" indicates we want to hit localhost:3000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("request body", req.body);
  res.send("Got the post");
});

// route parameters example

// app.get("/users/:userId", (req, res) => {
//   res.send(req.params);
//   // if the URL is /users/123 req.params would be {userId: "123"}
// });

app.get("/users/:userId/version/:versionId", (req, res) => {
  res.send(req.params);
  // if the URL is /users/123 req.params would be {userId: "123"}
});

//listening for GET/Post/Patch/put/Delete requests on port 3000
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// ESModule way of importing libraries
//import express from "express"; // must have type set to "module" on package.json

// CommonJS way of importing libraries - default when creating a new package
const express = require("express");

const app = express();

const port = 3000;

// create a static site server

// we want to be able to serve up our Craigslist 3.0 site

// use app.use to invoke our middleware

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
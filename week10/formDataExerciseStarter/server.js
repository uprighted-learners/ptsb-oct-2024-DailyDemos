// mad libs clone as an api
const express = require("express");
const app = express();

//setup our middleware
app.use(express.urlencoded({ extended: true })); // form data get parsed off of a form submission
app.use(express.static("public"));

// create variables here
let word1;

// first word endpoint
// hit this endpoint somehow
app.get("/first-word", (req, res) => {
  res.send(`
    <form action="second-word" method="post">
        <label for="adjective">How are you feeling today?</label>
        <input type="text" name="adjective" id="adjective" />
        <button type="submit">Submit</button>
    </form>
    `);
});

// second word

app.post("/second-word", (req, res) => {
  // save off the 1st word to a variable
  word1 = req.body.adjective;
  console.log("word1 is set to:", word1);
  res.send(`
    <form action="third-word" method="post">
        <label for="noun">What your favorite food?</label>
        <input type="text" name="noun" id="noun" />
        <button type="submit">Submit</button>
    </form>
    `);
});

// ALL post requests

// third word  endpoint
 // question will be What is your favorite place
 // noun

// forth word  endpoint
  // question who is your favorite person
  // noun

// fifth word endpoint
  // question What did you do last week?
  // verb

// done endpoint that redirects to story
  // how to do a redirect from express response object

// story endpoint that shows the mad lib
  // I had a very .... <p> put text into a paragraph response
  // add a link to the reset


// Get Request  
// reset endpoint that resets the words
  //ex. word1 = ""

const port = 3000;

app.listen(port, () => {
  console.log("We are always listening...");
});

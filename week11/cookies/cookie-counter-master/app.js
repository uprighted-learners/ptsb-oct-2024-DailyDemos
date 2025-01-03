const express = require("express"); // standard express setup
const cookieParser = require("cookie-parser"); // importing our middleware
const app = express(); // standard express setup
const port = process.env.PORT || 5000; // standard express setup

app.use(express.static("public")); // public folder is available to serve
app.use(cookieParser()); // takes the cookie values and throws them onto request.cookie automagically

// endpoint
app.get("/", (request, response) => {
  console.log(`request cookie (header): ${request.cookie}`);
  console.log("request cookies:", request.cookies);

  let hits = +(request.cookies.hits || 0);
  console.log("hits is set to ", hits)
  //error catch all and recover
  if (isNaN(hits) || hits < 0) {
    hits = 0;
  }
  console.log("increment by one")
  hits += 1;
  console.log("now hits is set to ", hits);
  response.cookie("hits", "" + hits); // what is the value if on line 14 it was 13
  let output = `Visits by you: ${hits}`;
  response.type("text/plain");
  response.send(output);
});

// standard express setup
app.listen(port, () =>
  console.log(`Cookie Counter listening on port ${port}!`)
);

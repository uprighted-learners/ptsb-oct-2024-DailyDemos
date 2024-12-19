const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// im waiting for a post
// that happens to be to /submit-form
// once I see that run the arrow function inside
app.post("/submit-form", (req, res) => {
  const { username, email } = req.body;
  console.log("form submitted", { username, email });

  res.send("Hey nice form, keep up the great submissions");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

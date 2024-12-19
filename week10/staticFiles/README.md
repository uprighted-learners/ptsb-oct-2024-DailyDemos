## Create a express application from scratch

1. create a folder
2. create a gitignore file and add this line(only if going into source control)
```
node_modules
```
3. 
```
npm init -y
```
4. Install the packages we want
```
npm i express
// optionally npm install express
```
5. create app.js file
6. add the following to the file
```
const express = require("express");

const app = express();

const port = 3000;
```
7. created public folder in root
8. Create craigslist 3.0 site in public folder
9. add the listener and the middleware for static file serving
```
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
```
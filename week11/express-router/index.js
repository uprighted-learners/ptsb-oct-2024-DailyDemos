import express from "express";
import peopleRouter from 'people';
import planetsRouter from "planets";
const app = express();



//people

app.use('/api/people', peopleRouter)

//planets

app.use("/api/planetsRouter", planetsRouter);


const PORT = 5000;

app.listen(PORT, () => {
  console.log("starting example route api");
});

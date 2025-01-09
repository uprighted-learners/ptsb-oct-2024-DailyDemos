import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoute from "./routes/student.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO = process.env.MONGODB;
// initial setup is above at slide 15

// DB connection
// use mongoose connect to connect to the DB
// must utilize the connection string and add the DB name to it
mongoose.connect(`${MONGO}`); // sticking the DB name at the end this could go on the connection string
const db = mongoose.connection;
db.once("open", () => {
  console.log(`connected: ${MONGO}`);
});

//middleware
app.use(express.json());
app.use(cors());

// routes here
app.use("/student", studentRoute);

//listener
app.listen(PORT, () => {
  console.log(`student server on port: ${PORT}`);
});

import { Router } from "express";
import Student from "../models/student.model.js";
const router = Router();
router.post("/new", async (req, res) => {
  try {
    const student = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    const newStudent = await student.save();
    res.status(200).json({
      student: newStudent,
      message: `success`,
    });
  } catch (error) {
    console.log(error.message);
  }
});
export default router;

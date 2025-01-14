import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// middleware setup

const validateSession = async (req, res, next) => {
  // Middleware still has access to the request, response, and requires the next() function to move past it.

  try {
    //1. Take token from auth header

    const token = req.headers.authorization;

    //2. Check if the token is valid

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    //3. Provide a response

    // if valid, generate a variable that holds the user info

    // user the .findById() to check for user that matched token user id

    const user = await User.findById(decodedToken.id);

    if (!user) {
      throw Error("User or password invalid");
    }

    // create a new key within our req to store the user info

    req.user = user;

    return next(); // go to next middleware or router location
  } catch (err) {
    res.json({ message: err.message });
  }
};

export default validateSession;

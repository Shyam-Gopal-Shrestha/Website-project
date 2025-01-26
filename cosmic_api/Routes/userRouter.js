import express from "express";
import { hashPassword } from "../utility/bcryptHelper.js";
import {
  buildSuccessResponse,
  buildErrorResponse,
} from "../utility/responseHelper.js";
import { createUser } from "../Models/userModel.js";

const userRouter = express.Router();

// create user | Signup Endpoint
userRouter.post("/signup", async (req, res) => {
  try {
    const { password } = req.body;

    const hashedPassword = hashPassword(password);
    // Query to db
    const result = await createUser({ ...req.body, password: hashedPassword });

    result?._id
      ? buildSuccessResponse(res, result, "user created successfully!!")
      : buildErrorResponse(res, "could not create user!!");
  } catch (error) {
    if (error.code === 11000) {
      error.message = "User with this email already exists!!";
    }
  }
});
// SignUp route || Register route
// router.post("/signup", async (req, res) => {
//   const { name, contactNumber, address, email, password } = req.body;

//   try {
//     const { password } = req.body;
//     const hashedPassword = hashedPassword(password);

//     const newUser = new User({ name, contactNumber, address, email, password });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Error during user registration");
//     res.status(500).json({ error: "Failed to register user" });
//   }
// });

// Login route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "User not founs" });
//     }
//     res.status(200).json({ message: "Login Successful" });
//   } catch (error) {
//     console.error("Error during Login");
//     res.status(500).json({ error: "Failed to login" });
//   }
// });

export default userRouter;

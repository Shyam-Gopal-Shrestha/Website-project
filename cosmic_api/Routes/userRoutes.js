import express from "express";
import User from "../Models/User.js";

const router = express.Router();

// SignUp route
router.post("/signup", async (req, res) => {
  const { name, contactNumber, address, email, password } = req.body;

  try {
    const newUser = new User({ name, contactNumber, address, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error durint user registration");
    res.status(500).json({ error: "Failed to register user" });
  }
});

export default router;

import userSchema from "../schema/userSchema.js";

// SignUp route || Register route
export const createUser = (userObj) => {
  return userSchema(userObj).save();
};

// find user by email
export const findUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

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

// // Login route
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

// export default router;

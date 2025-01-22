import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes.js";
import conMongoDb from "./config/mongodbConfig.js";

// console.log(process.env);

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDb
conMongoDb();

// routes
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

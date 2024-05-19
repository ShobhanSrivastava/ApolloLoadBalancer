import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";

import { logger, errorHandler } from "./utils";
import { connectDB } from "./config";

import Routes from "./routes";

// Load environment variables from .env file

// This will override the console methods with the logger
logger.overrideConsole();

// Create an express server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Define a test route for the root of the application
app.get("/health", (req, res) => {
  res.status(200).send({ message: "OK" });
});

app.use("/config", Routes.ConfigRouter);

// Use the error handler middleware
app.use(errorHandler);

// Get the PORT from the environment variables or use 8765
const PORT: number = parseInt(process.env.PORT as string) || 8765;

// Listen to requests on the specified port
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT} 🚀`);
  });
}).catch((error) => {
  console.error(`Error connecting to database: ${error.message}\n`, error);
  process.exit(1);
});

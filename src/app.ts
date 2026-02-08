import express, { NextFunction, Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env

// Middleware (must be before routes)
app.use(express.json());

// Configure CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);

// Auth routes
app.all("/api/auth/*splat", toNodeHandler(auth));

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send(`hi`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

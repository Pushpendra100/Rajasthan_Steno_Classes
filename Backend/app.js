import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1/user", userRouter);

export { app };
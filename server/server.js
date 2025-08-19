import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// CONNECT DB
connectDB();

//MIDDLEWARE
app.use(express.json());
app.use('/api/auth',userRouter);

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

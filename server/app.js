import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/userDetails.js";
import cors from "cors";
import * as dotenv from "dotenv";
import verifyJwt from "./middleware/jwtMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: "../.env" });

const port = 3001;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);

app.use("/user", verifyJwt, userRoutes);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});

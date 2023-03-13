import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/userDetails.js";
import cors from "cors";
import * as dotenv from "dotenv";
import verifyJwt from "./middleware/jwtMiddleware.js";
dotenv.config({ path: "../.env" });

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.use("/user", verifyJwt, userRoutes);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});

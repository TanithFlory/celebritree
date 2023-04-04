import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/userDetails.js";
import articleRoute from "./routes/articles.js";
import googleAuth from "./routes/googleAuth.js";
import cors from "cors";
import userContact from "./controllers/userContact.js";

const port = 3001;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);
app.use(express.json());

app.use("/api", authRoutes);

app.use("/auth", googleAuth);

app.use("/posts", articleRoute);

app.use("/user", userRoutes);

app.post("/contact", (req, res) => {
  userContact(req, res);
});

app.disable("x-powered-by");

app.listen(port, () => {
  console.log(`Listening To ${port}`);
});

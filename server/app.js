import express from "express";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/userDetails.js";
import articleRoute from "./routes/articles.js";
import googleAuth from "./routes/googleAuth.js";
import userContact from "./controllers/userContact.js";

const port = 3001;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["https://celebritree.in"],
  })
);
app.use(express.json());
app.use(helmet());

app.use("/api", authRoutes);

app.use("/api/auth", googleAuth);

app.use("/api/posts", articleRoute);

app.use("/api/user", userRoutes);

app.post("/api/contact", (req, res) => {
  userContact(req, res);
});

app.disable("x-powered-by");

app.listen(port, () => {
  console.log(`Listening To ${port}`);
});

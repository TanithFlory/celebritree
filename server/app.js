import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/userDetails.js";
// import googleAuth from "./routes/googleAuth.js";
import cors from "cors";
import * as dotenv from "dotenv";
import verifyJwt from "./middleware/jwtMiddleware.js";
import cookieParser from "cookie-parser";
import { google } from "googleapis";

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
app.disable('x-powered-by')

app.use("/api", authRoutes);

app.use("/user", verifyJwt, userRoutes);

// app.use("/auth", googleAuth);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});

const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const clientID = process.env.REACT_APP_CLIENT_ID;
const redirect = "http://localhost:3001/auth/google/callback";

const OAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirect);

app.get("/auth/google/login", (req, res) => {
  const url = OAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });
  return res.json(url);
});

app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;
  const { tokens } = await OAuth2Client.getToken(code);
  console.log(tokens);
  res.redirect("http://localhost:3000/home")
});

//https://www.googleapis.com/plus/v1/people/me?access_token={access_token}
//await google.oauth2('v2').userinfo.get({ auth: oauth2Client, userId: 'me' });

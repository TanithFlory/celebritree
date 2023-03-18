import express from "express";
import { google } from "googleapis";
import axios from "axios";
import mongoConnection from "../db.js";
import { User } from "../models/user.js";
import { storeCookie } from "../helpers/storeCookie.js";
import { getAccessToken } from "../helpers/jwtToken.js";

import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const router = express.Router();

const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const clientID = process.env.REACT_APP_CLIENT_ID;
const redirect = "http://localhost:3001/auth/google/callback";

const OAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirect);

router.get("/google/login", (req, res) => {
  const url = OAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });
  return res.json(url);
});

router.get(
  "/google/callback",
  async (req, res, next) => {
    try {
      const { code } = req.query;
      const { tokens } = await OAuth2Client.getToken(code);
      OAuth2Client.setCredentials(tokens);
      if (tokens) {
        const { access_token } = tokens;
        const response = await axios({
          method: "GET",
          url: `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
        });
        const { email, verified_email, given_name, family_name } =
          response.data;

        await mongoConnection();

        const foundUser = await User.findOne({ email });

        if (!foundUser) {
          const user = new User({
            firstName: given_name,
            lastName: family_name,
            email: email,
            emailVerified: verified_email,
          });
          await user.save();

          const userDetails = await User.findOne({ email });
          const accessToken = getAccessToken({
            userId: userDetails._id,
            firstName: given_name,
          });
          return res.send(
            `<script>window.opener.postMessage("${accessToken}", 'http://localhost:3000');window.close();</script>`
          );
        }
        req.userId = foundUser._id;
        req.firstName = foundUser.firstName;
        next();
      }
    } catch (err) {
      console.log(err);
    }
  },
  (req, res) => {
    const userId = req.userId;
    const firstName = req.firstName;
    const accessToken = getAccessToken({
      userId: userId,
      firstName: firstName,
    });
    return res.send(
      `<script>window.opener.postMessage("${accessToken}", 'http://localhost:3000');window.close();</script>`
    );
    // return res.send(
    //   `<script>localStorage.setItem("accessToken", "${accessToken}");window.close();</script>`
    // );
  }
);

export default router;

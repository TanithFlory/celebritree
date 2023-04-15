import express from "express";
import { google } from "googleapis";
import axios from "axios";
import mongoConnection from "../db.js";
import { User } from "../models/user.js";
import { getAccessToken } from "../helpers/jwtToken.js";

const router = express.Router();

const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const clientID = process.env.OAUTH_CLIENTID;
const redirect = `https://celebritree.in${process.env.REACT_APP_API_BASE_URL}/auth/google/callback`;

google.options({
  http2: true,
});
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

          const userDetails = await User.findOne({ email }, { password: 0 });
          const accessToken = getAccessToken({
            userId: userDetails._id,
            firstName: given_name,
            lastName: family_name,
            email,
          });
          return res.redirect(
            `https://celebritree.in/#access_token=${accessToken}`
          );
        }
        req.data = { ...foundUser };
        next();
      }
    } catch (err) {
      console.log(err);
    }
  },
  (req, res) => {
    const { firstName, lastName, email, _id } = req.data._doc;
    const accessToken = getAccessToken({
      userId: _id,
      firstName,
      lastName,
      email,
    });
    return res.redirect(`https://celebritree.in/#access_token=${accessToken}`);
  }
);

export default router;

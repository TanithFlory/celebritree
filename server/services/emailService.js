import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const createTransport = async () => {
  const email = process.env.REACT_APP_EMAIL;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  const clientID = process.env.OAUTH_CLIENTID;
  const refreshToken = process.env.OAUTH_REFRESH_TKN;
  const client = new OAuth2(
    clientID,
    clientSecret,
    "https://developers.google.com/oauthplayground"
  );
  client.setCredentials({
    refresh_token: refreshToken,
  });
  const accessToken = await new Promise((resolve, reject) => {
    client.getAccessToken((err, res) => {
      if (err) {
        console.log(err);
        reject(new Error("Error, failed to generate token."));
      }
      resolve(res);
    });
  });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      accessToken,
      type: "OAuth2",
      user: email,
      clientId: clientID,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  return transporter;
};

const emailOtp = async (otp, email) => {
  try {
    const transporter = await createTransport();
    transporter.sendMail({
      subject: "OTP Verification - Celebritree",
      text: "OTP",
      to: email,
      from: process.env.REACT_APP_EMAIL,
      html: `        <div
      style="
        font-family: Franklin Gothic;
        max-width: 550px;
        margin: auto;
      "
    >
      <div>
        <img src="background.png" style="width: 100%; height: 250px" />
      </div>
      <div style="color: #7b7b7b">
        <h3 style="color: black">Hello,</h3>
        <p>Verify your email address.</p>
        <p>
          Thank you for your interest! Here is your one time password. This code
          is only valid for 10minutes.
        </p>
        <div style="display: flex">
          <h2
            style="
              text-align: center;
              padding: 10px;
              background-color: black;
              color: white;
              border-radius: 5px;
              display: inline-block;
              margin: auto;
            "
          >
            ${otp}
          </h2>
        </div>
        <hr style="width: 100%; height: 2px; border: 0" />
        <div style="display: flex">
          <div style="text-align: center;">
            <p style="margin-bottom: 3px">Thank you,</p>
            <p style="margin: 0 0 3px">Regards,</p>
            <p style="margin: 0; color: green">Celebritree</p>
          </div>
          <div style="margin: 0.5rem 0 0  14rem; text-align: center">
            <p style="margin-bottom: 3px">
              Please do not reply directly to this email.
            </p>
            <p style="margin: 0">You can contact us on help@celebritree.org</p>
          </div>
        </div>
      </div>
    </div>`,
    });
  } catch (err) {
    console.log(err);
  }
};
export default emailOtp;

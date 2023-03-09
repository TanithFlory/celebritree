import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const createTransport = async () => {
  const email = process.env.REACT_APP_EMAIL;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const refreshToken = process.env.REACT_APP_REFRESH_TKN;
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
  const transporter = await createTransport();
  transporter.sendMail({
    subject: "OTP Verification - Celebritree",
    text: "Here is your one time password ",
    to: email,
    from: process.env.REACT_APP_EMAIL,
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #53c24d;text-decoration:none;font-weight:600">Celebritree</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p><b>Login OTP<b></p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />Celebritree</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Celebritree</p>
        <p>Mangalore, INDIA</p>
      </div>
    </div>
   </div>`,
  });
};
export default emailOtp;

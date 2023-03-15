import cookie from "cookie";

const cookieOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  sameSite: "strict",
  secure: false,
  path: "/",
};

const storeCookie = (cookieName, payload, res) => {
  const cookieStored = cookie.serialize(cookieName, payload, cookieOptions);
  res.setHeader("Set-Cookie", cookieStored);
};

export default storeCookie;

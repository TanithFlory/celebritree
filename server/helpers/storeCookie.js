import cookie from "cookie";

export const storeCookie = (cookieName, payload, res) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    sameSite: "strict",
    secure: false,
    path: "/",
  };
  const cookieStored = cookie.serialize(cookieName, payload, cookieOptions);
  res.setHeader("Set-Cookie", cookieStored);
};

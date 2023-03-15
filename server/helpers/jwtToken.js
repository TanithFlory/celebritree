import jwt from "jsonwebtoken";

export const getAccessToken = (payload) => {
  const accessToken = jwt.sign(
    payload,
    process.env.REACT_APP_JWT_ACCESS_SECRET,
    {
      expiresIn: "59m",
    }
  );
  return accessToken;
};

export const getRefreshToken = (payload) => {
  const refreshToken = jwt.sign(
    payload,
    process.env.REACT_APP_JWT_REFRESH_SECRET,
    {
      expiresIn: "30d",
    }
  );
  return refreshToken;
};

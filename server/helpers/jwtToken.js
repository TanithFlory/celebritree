import jwt from "jsonwebtoken";

export const getAccessToken = (payload) => {
  const accessToken = jwt.sign(
    payload,
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: "365d",
    }
  );
  return accessToken;
};

// export const getRefreshToken = (payload) => {
//   const refreshToken = jwt.sign(
//     payload,
//     process.env.REACT_APP_JWT_REFRESH_SECRET,
//     {
//       expiresIn: "30d",
//     }
//   );
//   return refreshToken;
// };

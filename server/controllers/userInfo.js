import mongoConnection from "../db.js";
import { getAccessToken } from "../helpers/jwtToken.js";
import { User } from "../models/user.js";

const userInfo = {};

userInfo.personalDetails = async (req, res) => {
  try {
    await mongoConnection();
    const { email, userId } = req.data;
    const { firstName, lastName } = req.body;
    const response = await User.updateOne(
      { _id: userId },
      { firstName, lastName }
    );
    if (response.modifiedCount) {
      const accessToken = getAccessToken({
        userId,
        firstName: firstName,
        lastName: lastName,
        email,
      });
      res.status(200).json(accessToken);
    }
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export default userInfo;

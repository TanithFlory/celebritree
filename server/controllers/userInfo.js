import mongoConnection from "../db.js";
import { User } from "../models/user.js";

const userInfo = {};

userInfo.details = async (req, res) => {
  await mongoConnection();
};

export default userInfo;

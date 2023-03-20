import mongoConnection from "../db.js";
import UserContact from "../models/userContact.js";

const userContact = async (req, res) => {
  const { firstName, secondName, email, message } = req.body;
  try {
    await mongoConnection();

    const userContact = new UserContact({
      firstName,
      secondName,
      email,
      message,
    });

    await userContact.save();
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export default userContact;

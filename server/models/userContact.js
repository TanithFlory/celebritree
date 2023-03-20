import mongoose from "mongoose";

const userContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const UserContact = mongoose.model("usercontact", userContactSchema);
export default UserContact;

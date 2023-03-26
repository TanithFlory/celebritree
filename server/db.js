import mongoose from "mongoose";

const mongoConnection = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/celebritree", {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
  return mongoose;
};

export default mongoConnection;

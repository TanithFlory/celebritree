import mongoose from "mongoose";

const mongoConnection = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};

export default mongoConnection;

import mongoose from "mongoose";

const mongoConnection = async () => {
  const conn = await mongoose
    .connect(process.env.REACT_APP_MONGODB_URI, {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};

export default mongoConnection;

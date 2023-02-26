const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //installed because cors denial on post

const bcrypt = require("bcrypt");
const saltRounds = 10;

const mongoose = require("mongoose");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoConn = async () => {
  const conn = await mongoose
    .connect("mongodb://127.0.0.1:27017/celebritree", {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};

const usersSchema = new mongoose.Schema({
  fName: String,
  sName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", usersSchema);

app.post("/api/signup", (req, res) => {
  mongoConn();
  bcrypt.hash(req.body.password, saltRounds).then(function (hash) {
    const user = new User({
      fName: req.body.fName,
      sName: req.body.sName,
      email: req.body.email,
      password: hash,
    });
    user.save();
  });
});

app.listen(port, () => {
  console.log("listening to 3001");
});

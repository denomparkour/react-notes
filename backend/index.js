const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();
const cors = require("cors");
const user = require("./model/user");
const Userdata = require("./model/Userdata");
const port = process.env.PORT ||3000;
app.use(express.json());
app.use(cors());
var isUser = false;
// Mongoose connection
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Database connected successfully!"))
  .catch((e) => console.log(e));

// Routes
app.post("/api/register", async (req, res) => {
  const token = jwt.sign(
    {
      password: req.body.password,
    },
    process.env.ACCESS_TOKEN
  );
  try {
    await user.create({
      name: req.body.name,
      password: token,
    });
    console.log(`Another user ${req.body.name} registered successfully!`);
    res.json({ status: "ok", msg: "User created successfully!" });
  } catch (e) {
    console.log(e);
    if (e.code == "11000") {
      res.json({
        status: "error",
        msg: "User already exists!\nPlease try again with a different username.",
      });
    } else {
      res.json({
        status: "error",
        msg: "Blank Inputs or something went wrong!",
      });
    }
  }
});

app.post("/api/login", async (req, res) => {
  var inputPass = "";
  var outPass = "";
  var passFromDB = "";
  const token = jwt.sign(
    {
      password: req.body.password,
    },
    process.env.ACCESS_TOKEN
  );
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, res) => {
    inputPass = res.password;
  });
  const tempVar = await user.findOne({ name: req.body.name });
  if (tempVar == null) {
    console.log("Usernot found");
  } else {
    passFromDB = tempVar.password;
  }
  jwt.verify(passFromDB, process.env.ACCESS_TOKEN, (err, res) => {
    if (err) {
      console.log(
        "JWT signature is invalid\nUser Authentication services will no longer work!\nSame signature should be used for both encrypting and decrypting the password!"
      );
    } else {
      outPass = res.password;
    }
  });
  isUser = inputPass == outPass;
  if (isUser) {
    res.json({ status: "ok", msg: "Login Successful!" });
  } else {
    res.json({
      status: "error",
      msg: "User Not found or Invalid credentials!",
    });
  }
});

app.post("/api/create", async (req, res) => {
  if (!isUser) {
    res
      .status(401)
      .json({ status: "error", msg: "You are not authorized to come here!" });
  } else {
    if (req.body.name === "" || req.body.name === "") {
      res.json({ status: "err", msg: "No data should be empty!" });
    } else {
    }
    try {
      await Userdata.create({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
      });
      res.json({ status: "ok", msg: "Data added successfully!" });
    } catch (e) {
      res.json({ status: "err", msg: "Please enter all the values!" });
    }
  }
});

app.post("/api/fetch", async (req,res) => {
  if(!isUser) {
    res
      .status(401)
      .json({ status: "error", msg: "You are not authorized to come here!" });
  }else {
    const fetch = await Userdata.find({name: req.body.name})
    res.status(301).json(fetch)
  }
})
// Listener
app.listen(port, () => {
  console.log(`server started on ${port}`);
});

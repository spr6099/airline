const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./database");
var session = require("express-session");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/register", async (req, res) => {
  const regDatas = {
    name: req.body.name,
    dob: req.body.dob,
    address: req.body.address,
    phno: req.body.phno,
  };
  const loginDatas = {
    email: req.body.email,
    password: req.body.password,
    userStatus: req.body.userStatus,
  };
  try {
    const db = await database();
    const regResult = await db.collection("register").insertOne(regDatas);
    loginDatas.regID = regResult.insertedId;
    const result2 = await db.collection("logindb").insertOne(loginDatas);
    console.log(regResult);
    res.json("success");
  } catch (error) {
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  const logDatas = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const db = await database();
    const log = await db
      .collection("logindb")
      .findOne({ email: logDatas.email })
      .then((logResult) => {
        // console.log(logResult);
        if (logResult) {
          if (logResult.password == logDatas.password) {
            // console.log("login succesfully");
            req.session.login = logResult;
            if (logResult.userStatus == 0) {
              res.json(logResult);
            } else if (logResult.userStatus == 1) {
              res.json(logResult);
            } else if (logResult.userStatus == 2) {
              res.json(logResult);
            } else {
              res.json("invalid");
            }
          } else {
            res.json("invalid");
          }
        } else {
          res.json("invalid");
        }
      });
  } catch (err) {
    console.log(err);
  }
});

app.listen(5001);

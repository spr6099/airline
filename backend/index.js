const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./database");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const datas = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const db = await database();
    const result = await db.collection("register").insertOne(datas);
    console.log(result);
    res.json("success");
  } catch (error) {
    console.error(error);
  }
});

app.listen(5001);

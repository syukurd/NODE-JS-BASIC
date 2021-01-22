const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const routing = require("./router");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/dilo");
const db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routing);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

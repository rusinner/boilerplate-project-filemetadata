var express = require("express");
const multer = require("multer");
var cors = require("cors");
require("dotenv").config();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  let responseObj = {};
  responseObj["name"] = req.file.originalname;
  responseObj["type"] = req.file.mimetype;
  responseObj["size"] = req.file.size;
  res.json(responseObj);
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});

var path = require("path");
var express = require("express");
const cors = require("cors");
const axios = require("axios");
var app = express();

var htmlPath = path.join(__dirname, "public");

app.use(express.json());
app.use(express.static(htmlPath));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.get("/fake-api", async (req, res) => {
  const API = "https://thatcopy.pw/catapi/rest/";
  const { data } = await axios.get(API);
  console.log(data);
  return res.json(data);
});

var server = app.listen(3000, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("listening on http://" + host + ":" + port + "/");
});

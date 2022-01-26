const { application } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from  the express ");
});

app.get("/Priyanka", (req, res) => {
  res.send("hello Priyanka ");
});

app.listen(8000, () => {
  console.log("listing the port at localhost 8000");
});

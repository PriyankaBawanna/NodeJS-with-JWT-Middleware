const express = require("express");
const app = express();
const port = 8085;
app.get("/get_api/:id", (req, res) => {
  console.log({ query: req.query, params: req.params });
  res.send("Request");
});
const CheckURL = function (req, res, next) {
  console.log("current route is ", req.originalUrl);
  next();
};
app.use(CheckURL);
app.get("/", (req, res) => {
  console.log("i am the first route ");
  res.send("Welcome to Home page ");
});
app.get("/about", (req, res) => {
  console.log("i am the about  route ");
  res.send("Welcome to about page ");
});

app.listen(port, () => {
  console.log(`my application is running on http://${port}`);
});

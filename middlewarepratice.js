//middlewarepratice
const express = require("express");
const app = express();
const port = 7200;

app.get("/get_api/:id", (req, res) => {
  console.log({ query: req.query, params: req.params });
  res.send("Request");
});
app.get("/", (req, res, next) => {
  console.log("i'm first route ");
  res.send("<h1> I'm first route  </h1>");
});
app.get("/priyanka", (req, res) => {
  res.send("My name is Priyanka. I'm from Indore ");
});
app.get("/arun ", (req, res) => {
  res.send("My name is arun I'm from  Morena ");
});
const checkCity = (req) => {
  if (req.quer.city === "indore") {
    console.log("checking city in if condition ", req.quer.city);
    return false;
  }
  return true;
};
const checkState = (req) => {
  if (req.query.state === "Madhay Pardesh") {
    return false;
  }
  return true;
};
app.get("/nikhil", (req, res) => {
  if (!checkCity(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  const response = {
    name: "Nikhil",
    city: "Dhule",
    message: "My name is Nikhil. I'm from Dhule",
  };
  res.json(response);
});

app.get("Harshita", (req, res) => {
  res.send("my name is Harshita Bawanna ");
});

app.listen(port, () => {
  console.log(`my application is running on http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 7200;

app.get("/get_api/:id", (req, res) => {
  console.log({ query: req.query, params: req.params });
  res.send("Request");
});

app.get("/", (req, res) => {
  console.log("I am the first route");
  res.send("Welcome to Vidhya Skill School");
});

app.get("/priyanka", (req, res) => {
  if (!checkCity(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  const response = {
    name: "Priyanka",
    city: "indore",
    message: "My name is Priyanka. I'm from Chennai",
  };
  res.json(response);
});

app.get("/arun", (req, res) => {
  res.send("My name is Arun. I'm from Morena");
});

// localhost:7200/nikhil?city=indore - {You should not be here}
// .- {It should work as it is}
//

const checkCity = (req) => {
  if (req.query.city === "indore") {
    return false;
  }
  return true;
};

const checkState = (req) => {
  if (req.query.state === "shilong") {
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
    city: "Indore",
    message: "My name is Nikhil. I'm from Dhule",
  };
  res.json(response);
});

const validatePrakashRequest = (req, res, next) => {
  if (!checkCity(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  console.log("Inside validatePrakashRequest middleware");
  next();
};

const newFun = (req, res, next) => {
  console.log("Inside newFun");
  next();
};

app.get("/prakash", validatePrakashRequest, newFun, (req, res) => {
  res.send("My name is Prakash. I', from Tirupur");
});

app.post("/register-user", (req, res) => {
  const response = {
    message: "Post request loaded successfully",
  };
  res.json(response);
});

app.delete("/user", (req, res) => {
  res.send("I am a delete request");
});

app.get("/user", (req, res) => {
  res.send("I am a Get User");
});

app.post("/user", (req, res) => {
  res.send("I am a create User");
});

app.put("/user", (req, res) => {
  res.send("I'm a put request");
});

app.get("/fly", (req, res) => {
  const { name } = req.query;
  if (!name) {
    const response = {
      data: {},
      meta: {
        message: "Name is a mandatory params",
        code: 400,
      },
    };
    return res.status(400).json(response);
  }

  const response = {
    data: {
      message: `My name is ${name}`,
    },
    meta: {
      message: "Name is a mandatory params",
      code: 400,
    },
  };
  return res.json(response);
});

app.patch("/user", (req, res) => {
  res.send("I'm a Patch request");
});

app.get("*", (req, res) => {
  res.send({});
});

app.listen(port, () => {
  console.log(`My application is running on http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 7200;
const jwt = require("jsonwebtoken");
const {
  signToken,
  validateSignature,
  decodeToken,
} = require("./utilities/jwt");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/get_api/:id", (req, res) => {
  console.log({ query: req.query, params: req.params });
  res.send("Request");
});

app.get("/", (req, res) => {
  console.log("I am the first route");
  res.send("Welcome to Vidhya Skill School");
});

app.get("/priyanka", (req, res) => {
  res.send("My name is Priyanka. I'm from Indore");
});

app.get("/arun", (req, res) => {
  res.send("My name is Arun. I'm from Morena");
});

// localhost:7200/nikhil?city=indore - {You should not be here}
// localhost:7200/nikhil?city=bhopal - {It should work as it is}
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

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  if (!checkState(req)) {
    return res.status(400).json({ message: "You are not allowed to be here" });
  }

  const response = {
    name: "Nikhil",
    city: "Dhule",
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

app.get("/login", async (req, res) => {
  const payload = {
    id: 123,
  };
  const token = jwt.sign(payload, "secureKey", { expiresIn: "2h" });
  const decoded = jwt.decode(token);
  jwt.verify(token + "ghj", "secureKey", function (err, decoded) {
    console.log({ err, decoded });
    if (err) {
      /*
        err = {
          name: 'TokenExpiredError',
          message: 'jwt expired',
          expiredAt: 1408621000
        }
      */
    }
  });
  res.status(200).send({ token, decoded });
});

const myPersonalSecureKey = "hjvklbhhky97tyugvfuiu";
app.get("/place-order", (req, res) => {
  const item = "Farm house Pizza";

  const params = {
    name: "Priyanka Bawanna",
    item,
    orderNumber: 32,
    shopCode: 101,
    city: "Indore",
  };

  const myToken = jwt.sign(params, myPersonalSecureKey, { expiresIn: "7h" });
  res.status(200).send({ myToken });
});

app.post("/collect-order", async (req, res) => {
  try {
    const { token } = req.body;
    const tokenResponse = await jwt.verify(token, myPersonalSecureKey);
    console.log({ tokenResponse });

    const decodedToken = jwt.decode(token);

    res.send({ decodedToken });
  } catch (err) {
    console.log("Err: ", err);

    res.send({});
  }
});

app.get("/place-new-order", (req, res) => {
  const item = "Farm house Pizza";

  const params = {
    name: "Priyanka Bhawanna",
    item,
    orderNumber: 32,
    shopCode: 101,
    city: "Indore",
  };

  const myToken = signToken(params);
  res.status(200).send({ myToken });
});

const verifyToken = async (req, res, next) => {
  const { token } = req.body;

  const isAValidToken = await validateSignature(token);
  if (!isAValidToken) {
    return res
      .status(401)
      .send({ message: "You are not allowed to use the app" });
  }
  next();
};

app.get("/collect-new-order", verifyToken, async (req, res) => {
  const { token } = req.body;

  const tokenDetails = decodeToken(token);
  res.send({ tokenDetails });
});

app.get("*", (req, res) => {
  res.send({});
});

app.listen(port, () => {
  console.log(`My application is running on http://localhost:${port}`);
});

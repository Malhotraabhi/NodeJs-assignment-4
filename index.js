const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
  } else if (num1 > 1000000 || num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
  } else if (num1 < -1000000 || num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
  } else {
    let sum = num1 + num2;
    res.status(200).json({
      status: "success",
      message: "The sum of the given two numbers",
      result: sum,
    });
  }
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
  } else if (num1 > 1000000 || num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
  } else if (num1 < -1000000 || num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
  } else {
    let difference = num1 - num2;
    res.status(200).json({
      status: "success",
      message: "The difference of the given two numbers",
      result: difference,
    });
  }
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
  } else if (num1 > 1000000 || num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
  } else if (num1 < -1000000 || num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
  } else {
    let result = num1 * num2;
    res.status(200).json({
      status: "success",
      message: "The product of the given two numbers",
      result: result,
    });
  }
});

app.post("/divide", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
  } else if (num2 === 0) {
    res.status(400).json({ status: "error", message: "Cannot divide by zero" });
  } else if (num1 > 1000000 || num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
  } else if (num1 < -1000000 || num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
  } else {
    let result = num1 / num2;
    res.status(200).json({
      status: "success",
      message: "The division of the given two numbers",
      result: result,
    });
  }
});

app.listen(5200);

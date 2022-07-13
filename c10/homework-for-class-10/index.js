const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/calc", (req, res) => {
  res.render("calc");
});

app.post("/calc-result", (req, res) => {
  let result;
  let operator = req.body.operator;
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      console.log("Enter a valid number!");
      break;
  }
  res.render("calc-result", { calc_results: result });
});

app.listen(8080, (err) => {
  if (err) return console.log(err);
  console.log("Server started on port 8080!");
});

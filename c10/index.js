const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("OK");
  res.render("index");
});

app.get("/podatoci/:ime", (req, res) => {
  let data = {
    // ја пишува валутата што ја внесуваме после /podatoci/bojan
    // output in HTML: Hello bojan
    ime: req.params.ime,
    // adding a array of studenti objects
    studenti: [
      { ime: "Rocky", prezime: "Balboa" },
      { ime: "Jimmy", prezime: "McGill" },
      { ime: "Piere", prezime: "LeMon" },
      { ime: "John", prezime: "Rambo" },
      { ime: "Bilbo", prezime: "Baggins" },
      { ime: "Mac", prezime: "McDonald" },
    ],
  };
  res.render("podatoci", data); //views podatoci.ejs
});

// new route
app.get("/formular", (req, res) => {
  res.render("formular", data);
});

// POST method
app.post("/formular-result", (req, res) => {
  let data = {
    ime: req.body.ime,
    prezime: req.body.prezime,
  };

  res.render("formular_result");
});

//! Calculator exercise
app.get("/calculator", (req, res) => {
  res.render("/calculator");
});

app.post("/calculator-result", (req, res) => {
  let result;
  switch (select) {
    case "+":
      result = req.body.num1 + req.body.num2;
      break;
    case "-":
      result = req.body.num1 - req.body.num2;
      break;
    case "*":
      result = req.body.num1 * req.body.num2;
      break;
    case "/":
      result = req.body.num1 / req.body.num2;
      break;
    default:
      break;
  }

  res.render("/calculator-result", data);
});

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log("Running on PORT 8080");
});

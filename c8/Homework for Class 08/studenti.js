// importing the express module
const express = require("express");

// creating a new instance of the router.
const router = express.Router();

// creating an array called studenti that will hold all of the students in this application
const studenti = [{}];

// using POST method for posts to "/studenti" with a function that takes two parameters: req and res
// In this case, req is an object containing information about the user who posted to "/studenti".
// This function sends back some data about each student in response to the request for them.
router.post("/studenti", (req, res) => {
  const student = req.body;
  studenti.push(student);

  res.send(
    ` Име:${student.ime}, Презиме:${student.prezime}, Просек:${student.prosek}`
  );
});

module.exports = router;

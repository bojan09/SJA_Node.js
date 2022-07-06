// we import Express here
const express = require("express");

// import funciton from handlers
const handlers = require("./handlers");

// we store express in the app constant to use for later in the code bellow
const app = express();

// activate the JSON(req.body) middleware/ it's a sort of a plugin
app.use(express.json());

// add new route/endpoint to the app
app.get("/home", handlers.home); // http GET method

// calc/plus
// calc/minus
// calc/delenje
// calc/mnozenje
app.get("/calc/:operation", handlers.calculator); // http GET method  (Get someting from the server)

// new route
app.post("/calc/:operation", handlers.calculator2); // http POST method (Post something on server)

// Start the app
app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server successfully started");
});

// ДОМАШНА!!!

// рута POST /studenti
// на неа да можете да пратите JSON
/*
{
    "ime": "Pero",
    "prezime": "Perovski",
    "prosek": 9.2
}
*/
// откако handler функцијата ќе ги прими податоците, треба да ги запише во текстуелен фајл

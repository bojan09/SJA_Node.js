// importing the express module
const express = require("express");
// importing studenti
const studenti = require("./studenti");

// creating an Express app and using it to listen to PORT 8080
const app = express();
const PORT = 8080;

app.use(express.json());

// a route is defined for the / path that points to the studenti module.
app.use("/", studenti);

// when the server starts up, it prints out "Server running on port: http://localhost:8080".
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});

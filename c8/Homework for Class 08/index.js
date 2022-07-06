const express = require("express");
const bodyParser = require("bodyParser");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});

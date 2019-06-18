const express = require("express");
const app = express();
const getPassword = require("./lockercombination");
const port = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/rest/lockercombination", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ password: getPassword() });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");
const app = express();
const getPassword = require("./locker-combination");
const port = 3001;

app.get("/rest/locker-combination", (req, res) => {
  res.send({ password: getPassword() });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

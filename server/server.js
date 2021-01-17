require("dotenv");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/landing.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening at http://localhost:${process.env.PORT || 3000}`);
});

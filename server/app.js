require("dotenv");
const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");

//LOAD JSON OF POKEMON
const pokemon_json = fs.readFileSync(`${__dirname}/data/pokemon.json`);
const data = JSON.parse(pokemon_json);

// IF DEVELOPMENT THEN LOG REQUESTS AND RESPONSES
if (process.env.NODE_ENV === "development") {
  app.use(morgan());
}

// API ENDPOINTS
app.get("/api/v1/pokemon", (req, res) => {
  res.status(200).json({
    status: "success",
    count: data.length,
    pokemon: data,
  });
});

// DEFAULT PAGE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening at http://localhost:${process.env.PORT || 3000}`);
});

module.exports = app;

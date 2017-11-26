const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const initializeGame = require("./gameLogic/initializeGame");
const processMoveRequest = require("./gameLogic/processMoveRequest");
let game;

const PORT = 3000;
const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "../", "client")));

app.get("/start", (req, res) => {
  game = initializeGame();
  const strGame = JSON.stringify(game);
  res.send(strGame);
});

app.get("/move/:player/:selectSq/:dropSq/:board", (req, res) => {
  const gameState = processMoveRequest(req.params, game);
  game = gameState;
  const strGame = JSON.stringify(gameState);
  res.send(strGame);
});

app.listen(PORT, err => {
  if (err) throw new Error("could not connect");
  console.log("connected to ", PORT);
});

module.exports = game;

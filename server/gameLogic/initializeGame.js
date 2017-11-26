const Game = require("../models/Game");

module.exports = function() {
  const game = new Game(8);
  game.setup();
  return game;
};

const checkValidOptions = require("../../server/gameLogic/checkValidOptions");
const Game = require("../../server/models/Game");

describe("checkValidOptions", function() {
  xit("should only push valid options", function() {
    const game = new Game(2);
    checkValidOptions;
  });
});

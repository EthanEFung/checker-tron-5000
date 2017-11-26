const initializeGame = require("../../server/gameLogic/initializeGame");
const Game = require("../../server/models/Game");
const Checker = require("../../server/models/Checker");

describe("initializeGame", function() {
  it("should exist", function() {
    const game = initializeGame();
    expect(game).toBeInstanceOf(Game);
  });
  it("should have a grid of 8 by 8", function() {
    const game = initializeGame();
    expect(game.board.length).toEqual(8);
  });
  it("should set up pieces", function() {
    const game = initializeGame();
    const piece = game.board[0][1].piece;
    expect(piece).toBeInstanceOf(Checker);
  });
});

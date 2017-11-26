const defineBtwnSq = require("../../server/gameLogic/defineBtwnSq");
const Game = require("../../server/models/Game");

describe("defineBtwnSq", function() {
  it("should find a square btwn two square", function() {
    const game = new Game(3);
    const test = defineBtwnSq(game.board[0][0], game.board[2][2], game.board);
    expect(test).toEqual(game.board[1][1]);
  });
  it("should find a square btwn two square", function() {
    const game = new Game(3);
    const test = defineBtwnSq(game.board[0][2], game.board[2][0], game.board);
    expect(test).toEqual(game.board[1][1]);
  });
  it("should find a square btwn two square", function() {
    const game = new Game(3);
    const test = defineBtwnSq(game.board[2][0], game.board[0][2], game.board);
    expect(test).toEqual(game.board[1][1]);
  });
  it("should find a square btwn two square", function() {
    const game = new Game(3);
    const test = defineBtwnSq(game.board[2][2], game.board[0][0], game.board);
    expect(test).toEqual(game.board[1][1]);
  });
});

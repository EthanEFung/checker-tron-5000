const Checker = require("../../server/models/Checker");
const Player = require("../../server/models/Player");
const Game = require("../../server/models/Game");

describe("Checker", function() {
  it("should exist", function() {
    const test = new Checker("black");
    expect(test).toBeInstanceOf(Checker);
  });
  it("should have a side", function() {
    const test = new Checker("black");
    expect(test.side).toEqual("black");
  });
  it("should have a king property", function() {
    const test = new Checker("white", true);
    expect(test.king).toBeTruthy();
  });
  it("should have a function that checks king status", function() {
    const test = new Checker("black");
    expect(test.isKing()).toBeFalsy();
  });
  it("should have a way to promote", function() {
    const test = new Checker("black");
    test.promote();
    expect(test.isKing()).toBeTruthy();
  });
  it("should have a way to check if the piece is opposed to player", function() {
    const test = new Checker("black");
    const player = new Player(true, "white");

    expect(test.isOpposedTo(player.side)).toBeTruthy();
  });
  it("should have a way to check if the piece is opposed to player if not opposed", function() {
    const test = new Checker("black");
    const player = new Player(true, "black");

    expect(test.isOpposedTo(player.side)).toBeFalsy();
  });

  it("should check if it can leap over another piece", function() {
    const test = new Game(3);
    const board = test.board;
    board[1][1].piece = new Checker("black", false);
    board[2][2].piece = new Checker("white", false);
    const actual = board[2][2].piece.canLeap(board[2][2], board);
    expect(actual).toBeTruthy();
  });

  it("should check if it cannot leap over another piece", function() {
    const test = new Game(3);
    const board = test.board;
    board[0][0].piece = new Checker("black", false);
    board[2][2].piece = new Checker("white", false);
    const actual = board[2][2].piece.canLeap(board[2][2], board);

    expect(actual).toBeFalsy();
  });
  it("should check if it can leap over another piece", function() {
    const test = new Game(3);
    const board = test.board;
    board[1][1].piece = new Checker("white", false);
    board[2][2].piece = new Checker("white", false);
    const actual = board[2][2].piece.canLeap(board[2][2], board);
    expect(actual).toBeTruthy();
  });
});

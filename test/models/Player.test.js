const Player = require("../../server/models/Player");
const Game = require("../../server/models/Game");
const Checker = require("../../server/models/Checker");
describe("Player", function() {
  it("should have a way to advance pieces on the board", function() {
    const game = new Game(3);
    const board = game.board;
    game.place("white").pieces(board[2]);
    const player = game.turnQueue.shift();
    player.advancePiece(board[2][1], board[1][0]);
    expect(board[1][0].piece).toEqual({
      side: "white",
      king: false
    });
    expect(board[2][1].piece).toBeNull();
  });
  it("should have a way to take a turn", function() {
    const game = new Game(3);
    const board = game.board;
    const turns = game.turnQueue;
    game.place("white").pieces(board[2]);
    game.place("black").pieces(board[0]);

    expect(turns[0].turn).toBeTruthy();
    expect(turns[1].turn).toBeFalsy();
    expect(turns[0].side).toEqual("white");

    turns[0].move(board[2][1], board[1][0], turns);

    expect(turns[0].turn).toBeTruthy();
    expect(turns[1].turn).toBeFalsy();
    expect(turns[0].side).toEqual("black");
  });
  it("should have a way of validating moves", function() {
    const game = new Game(3);
    const board = game.board;
    const turns = game.turnQueue;
    game.place("white").pieces(board[2]);
    game.place("black").pieces(board[0]);
    const test = turns[0].moveIsValid(board[2][1], board[1][0]);
    expect(test).toBeTruthy();
  });
  it("should have a way of validating moves", function() {
    const game = new Game(3);
    const board = game.board;
    const turns = game.turnQueue;
    game.place("white").pieces(board[2]);
    game.place("black").pieces(board[0]);
    const test = turns[0].moveIsValid(board[2][1], board[2][0]);
    expect(test).toBeFalsy();
  });

  it("should be able to capture pieces on the board", function() {
    const game = new Game(3);
    const player = game.turnQueue[0];
    const board = game.board;
    board[0][0].piece = new Checker("white", true);
    board[1][1].piece = new Checker("black", true);
    player.capturePieceOn(board[1][1]);
    expect(board[1][1].piece).toBeNull();
    expect(board[0][0].piece).toEqual(new Checker("white", true));
  });

  it("should have a method that only captures if the target sq has opposing piece", function() {
    const game = new Game(3);
    const player = game.turnQueue[0];
    const board = game.board;
    board[0][0].piece = new Checker("white", true);
    board[1][1].piece = new Checker("black", true);
    player.captureIfNeeded(board[0][0], board[2][2], board);
    expect(board[1][1].piece).toBeNull();
  });
  it("should capture pieces", function() {
    const game = new Game(3);
    const player = game.turnQueue[0];
    const board = game.board;
    board[0][0].piece = new Checker("white", true);
    board[1][1].piece = new Checker("black", true);
    player.move(board[0][0], board[2][2], game.turnQueue, board);
    expect(board[0][0].piece).toBeNull();
    expect(board[1][1].piece).toBeNull();
    expect(board[2][2].piece).toEqual(new Checker("white", true));
  });
});

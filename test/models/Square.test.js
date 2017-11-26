const Square = require("../../server/models/Square");
const Game = require("../../server/models/Game");
describe("Square", function() {
  it("should have a way to check vacancy", function() {
    const test = new Square(0, 0);
    const actual = test.isVacant();
    expect(actual).toBeTruthy();
  });
  it("should have a way to check vacancy if taken", function() {
    const test = new Square(0, 0);
    test.piece = {};
    const actual = test.isVacant();
    expect(actual).toBeFalsy();
  });
  it("should have a way to check the distance one away", function() {
    const game = new Game(2);
    const board = game.board;

    const actual = board[0][0].is(1).awayFrom(board[1][1]);
    expect(actual).toBeTruthy();
  });
  it("should have a way to check the distance two away", function() {
    const game = new Game(3);
    const board = game.board;

    const actual = board[0][0].is(2).awayFrom(board[2][2]);
    expect(actual).toBeTruthy();
  });
  it("should have a way to check the distance is not one away", function() {
    const game = new Game(3);
    const board = game.board;

    const actual = board[0][0].is(1).awayFrom(board[2][1]);
    expect(actual).toBeFalsy();
  });
  it("should have a way to check the distance is not two away", function() {
    const game = new Game(3);
    const board = game.board;

    const actual = board[0][0].is(2).awayFrom(board[1][2]);
    expect(actual).toBeFalsy();
  });
});

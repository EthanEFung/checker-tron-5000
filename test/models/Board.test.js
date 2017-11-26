const createBoard = require("../../server/models/createBoard");
const Square = require("../../server/models/Square");

describe("Board", function() {
  it("should exist", function() {
    const board = createBoard(2);
    expect(board.length).toEqual(2);
  });
  it("should have squares", function() {
    const board = createBoard(2);
    expect(board[0][0]).toBeInstanceOf(Square);
  });
});

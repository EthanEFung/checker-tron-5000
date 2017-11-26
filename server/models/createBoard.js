const Square = require("./Square");

function createBoard(n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      const square = new Square(i, j);
      row.push(square);
    }
    board.push(row);
  }
  return board;
}

module.exports = createBoard;

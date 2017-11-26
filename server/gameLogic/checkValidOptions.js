module.exports = function(piece, board, sq) {
  const options = [];
  let topRow, botRow;
  if (piece.isKing()) {
    if (sq.row + 2 < board.length) botRow = board[sq.row + 2];
    if (sq.row - 2 >= 0) topRow = board[sq.row - 2];
    if (botRow) {
      if (botRow[sq.col + 2]) {
        options.push(botRow[sq.col + 2]);
      }
      if (botRow[sq.col - 2]) {
        options.push(botRow[sq.col - 2]);
      }
    }
    if (topRow) {
      if (topRow[sq.col + 2]) {
        options.push(topRow[sq.col + 2]);
      }
      if (topRow[sq.col - 2]) {
        options.push(topRow[sq.col - 2]);
      }
    }
  } else if (piece.side === "white") {
    if (board[sq.row - 2]) topRow = board[sq.row - 2];
    if (topRow) {
      if (topRow[sq.col + 2]) {
        options.push(topRow[sq.col + 2]);
      }
      if (topRow[sq.col - 2]) {
        options.push(topRow[sq.col - 2]);
      }
    }
  } else {
    if (board[sq.row + 2]) botRow = board[sq.row + 2];
    if (botRow) {
      if (botRow[sq.col + 2]) {
        options.push(botRow[sq.col + 2]);
      }
      if (botRow[sq.col - 2]) {
        options.push(botRow[sq.col - 2]);
      }
    }
  }
  return options;
};

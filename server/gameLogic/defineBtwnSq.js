function defineBtwnSq(selectSq, dropSq, board) {
  let minRow = Math.min(selectSq.row, dropSq.row);
  let minCol = Math.min(selectSq.col, dropSq.col);

  return board[minRow + 1][minCol + 1];
}

module.exports = defineBtwnSq;

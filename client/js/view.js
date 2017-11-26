let game;

function renderView(game) {
  const board = game.board;
  const $board = createBoardController(board);
  for (let row of board) {
    const $row = createRowController(row);
    $board.appendChild($row);
    for (let sq of row) {
      const $sq = createSqController(sq, game);
      $row.appendChild($sq);
      if (sq.piece) {
        $piece = createPieceController(sq.piece, game);
        $sq.appendChild($piece);
      }
    }
  }
}

window.onload = function() {
  window
    .fetch("/start")
    .then(res => res.json())
    .then(data => {
      game = data;
      renderView(data);
    });
};

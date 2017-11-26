function createBoardController(board) {
  let $board;
  if (document.getElementById("board")) {
    $board = document.getElementById("board");
    while ($board.firstChild) {
      $board.removeChild($board.firstChild);
    }
  } else {
    $board = document.createElement("tbody");
    $board.setAttribute("id", "board");
    document.body.appendChild($board);
  }
  return $board;
}
function createRowController(row) {
  const $row = document.createElement("tr");
  return $row;
}
function createSqController(sq, game) {
  const $sq = document.createElement("td");
  $sq.setAttribute("class", `square ${sq.color}`);

  $sq.addEventListener("dragstart", e => {
    game.selectSq = sq;
  });

  $sq.addEventListener("dragover", e => {
    e.preventDefault();
  });

  $sq.addEventListener("drop", e => {
    game.dropSq = sq;
  });

  return $sq;
}
function createPieceController(piece, game) {
  const $piece = document.createElement("span");
  $piece.textContent = piece.side;
  $piece.setAttribute("draggable", true);

  $piece.addEventListener("dragend", e => {
    //"/move/:player/:selectSq/:dropSq";
    let turn = JSON.stringify(game.turnQueue[0]);
    let selectSq = JSON.stringify(game.selectSq);
    let dropSq = JSON.stringify(game.dropSq);
    let board = JSON.stringify(game.board);
    fetch(`/move/${turn}/${selectSq}/${dropSq}/${board}`)
      .then(res => res.json())
      .then(data => {
        game = data;
        renderView(data);
      });
  });

  return $piece;
}

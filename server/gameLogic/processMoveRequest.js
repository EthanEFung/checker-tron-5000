module.exports = (params, game) => {
  let player = JSON.parse(params.player);
  let selectSq = JSON.parse(params.selectSq);
  let dropSq = JSON.parse(params.dropSq);
  let board = JSON.parse(params.board);

  game.turnQueue[0].move(
    game.board[selectSq.row][selectSq.col],
    game.board[dropSq.row][dropSq.col],
    game.turnQueue,
    game.board
  );
  return game;
};

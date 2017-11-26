const defineBtwnSq = require("../gameLogic/defineBtwnSq");

module.exports = class {
  constructor(turn, side) {
    this.turn = turn;
    this.side = side;
    this.movedPiece = null;
  }

  move(selectSq, dropSq, turnQueue, board) {
    if (this.isTurn()) {
      if (
        this.moveIsValid(selectSq, dropSq, board) &&
        (this.movedPiece === selectSq.piece || this.movedPiece === null)
      ) {
        this.advancePiece(selectSq, dropSq);
        if (selectSq.is(1).awayFrom(dropSq)) {
          this.movedPiece = null;
          this.endTurn(turnQueue);
        } else if (selectSq.is(2).awayFrom(dropSq)) {
          this.movedPiece = dropSq.piece;
          this.captureIfNeeded(selectSq, dropSq, board);
          if (!dropSq.piece.canLeap(dropSq, board)) {
            this.movedPiece = null;
            this.endTurn(turnQueue);
          }
        }
      }
    }
    console.log(`${turnQueue[0].side}s move`);
  }
  isTurn() {
    return this.turn === true;
  }
  moveIsValid(selectSq, dropSq, board) {
    const piece = selectSq.piece;
    if (this.isMovingOwnPiece(piece) && dropSq.isVacant()) {
      if (selectSq.is(1).awayFrom(dropSq)) {
        console.log("valid");
        return true;
      }
      if (selectSq.is(2).awayFrom(dropSq)) {
        const btwnSq = defineBtwnSq(selectSq, dropSq, board);
        if (!btwnSq.isVacant() && dropSq.isVacant()) {
          console.log("valid");
          return true;
        }
      }
    }
    console.log("invalid");
    return false;
  }
  advancePiece(selectSq, dropSq) {
    const piece = selectSq.piece;
    dropSq.piece = piece;
    selectSq.piece = null;
  }
  captureIfNeeded(selectSq, dropSq, board) {
    const btwnSq = defineBtwnSq(selectSq, dropSq, board);
    if (btwnSq.piece.isOpposedTo(this.side)) {
      this.capturePieceOn(btwnSq);
    }
  }
  capturePieceOn(sq) {
    sq.piece = null;
  }
  isMovingOwnPiece(piece) {
    return this.side === piece.side;
  }

  endTurn(turnQueue) {
    const player = turnQueue.shift();
    player.turn = false;
    turnQueue.push(player);
    turnQueue[0].turn = true;
  }
};

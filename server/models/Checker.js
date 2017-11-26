const defineBtwnSq = require("../gameLogic/defineBtwnSq");
const checkValidOptions = require("../gameLogic/checkValidOptions");

module.exports = class {
  constructor(side, king = false) {
    this.side = side;
    this.king = king;
  }
  isKing() {
    return !!this.king;
  }
  isOpposedTo(playerSide) {
    return this.side !== playerSide;
  }
  promote() {
    this.king = true;
  }
  canLeap(sq, board) {
    const validOptions = checkValidOptions(this, board, sq);
    return validOptions.some(opt => {
      let btwnSq = defineBtwnSq(sq, opt, board);
      if (!btwnSq.isVacant() && opt.isVacant) return true;
      else return false;
    });
  }
};

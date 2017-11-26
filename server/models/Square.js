const defineSqColor = require("../gameLogic/defineSqColor");

module.exports = class {
  constructor(row, col) {
    this.piece = null;
    this.row = row;
    this.col = col;
    this.color = defineSqColor(row, col);
  }
  isVacant() {
    return this.piece === null;
  }
  is(int) {
    return {
      awayFrom: dropSq => {
        return (
          (this.row === dropSq.row + int && this.col === dropSq.col + int) ||
          (this.row === dropSq.row - int && this.col === dropSq.col + int) ||
          (this.row === dropSq.row + int && this.col === dropSq.col - int) ||
          (this.row === dropSq.row - int && this.col === dropSq.col - int)
        );
      }
    };
  }
};

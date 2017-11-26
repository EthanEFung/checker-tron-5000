const Player = require("./Player");
const AI = require("./AI");
const Checker = require("./Checker");
const createBoard = require("./createBoard");

module.exports = class {
  constructor(n) {
    this.board = createBoard(n);
    this.winner = null;
    this.turnQueue = [new Player(true, "white"), new Player(false, "black")];
    this.selectSq = null;
    this.dropSq = null;
  }

  setup() {
    if (this.board.length !== 8) throw new Error("need 8x8 to setup board");
    //define rows
    const first = this.board[0];
    const second = this.board[1];
    const third = this.board[2];

    const thirdLast = this.board[this.board.length - 3];
    const secondLast = this.board[this.board.length - 2];
    const last = this.board[this.board.length - 1];

    this.place("black").pieces(first, second, third);
    this.place("white").pieces(thirdLast, secondLast, last);
  }

  place(side) {
    return {
      pieces: (...rows) => {
        rows.forEach(row => {
          row.forEach(sq => {
            if (sq.color === "black") sq.piece = new Checker(side);
          });
        });
      }
    };
  }
};

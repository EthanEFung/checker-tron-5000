const Game = require("../../server/models/Game");
const Checker = require("../../server/models/Checker");

describe("Game", function() {
  it("should exist", function() {
    const game = new Game();
    expect(game).toBeInstanceOf(Game);
  });
  it("should have an n x n grid", function() {
    const game = new Game(2);
    expect(game.board.length).toEqual(2);
  });
  it("should have way to place pieces on the board", function() {
    const game = new Game(2);
    game.place("white").pieces(game.board[0]);

    const expected = [
      [
        { piece: null, color: "white", row: 0, col: 0 },
        { piece: new Checker("white"), color: "black", row: 0, col: 1 }
      ],
      [
        { piece: null, color: "black", row: 1, col: 0 },
        { piece: null, color: "white", row: 1, col: 1 }
      ]
    ];
    expect(game.board).toEqual(expected);
  });
  it("should have way to place different pieces on the board", function() {
    const game = new Game(2);
    game.place("white").pieces(game.board[0]);
    game.place("black").pieces(game.board[1]);

    const expected = [
      [
        { piece: null, color: "white", row: 0, col: 0 },
        { piece: new Checker("white"), color: "black", row: 0, col: 1 }
      ],
      [
        { piece: new Checker("black"), color: "black", row: 1, col: 0 },
        { piece: null, color: "white", row: 1, col: 1 }
      ]
    ];
    expect(game.board).toEqual(expected);
  });
  it("should have way to place different pieces on the board that accepts multiple arguments", function() {
    const game = new Game(4);
    game.place("white").pieces(game.board[0], game.board[1]);
    game.place("black").pieces(game.board[2], game.board[3]);

    const expected = [
      [
        { piece: null, color: "white", row: 0, col: 0 },
        { piece: new Checker("white"), color: "black", row: 0, col: 1 },
        { piece: null, color: "white", row: 0, col: 2 },
        { piece: new Checker("white"), color: "black", row: 0, col: 3 }
      ],
      [
        { piece: new Checker("white"), color: "black", row: 1, col: 0 },
        { piece: null, color: "white", row: 1, col: 1 },
        { piece: new Checker("white"), color: "black", row: 1, col: 2 },
        { piece: null, color: "white", row: 1, col: 3 }
      ],
      [
        { piece: null, color: "white", row: 2, col: 0 },
        { piece: new Checker("black"), color: "black", row: 2, col: 1 },
        { piece: null, color: "white", row: 2, col: 2 },
        { piece: new Checker("black"), color: "black", row: 2, col: 3 }
      ],
      [
        { piece: new Checker("black"), color: "black", row: 3, col: 0 },
        { piece: null, color: "white", row: 3, col: 1 },
        { piece: new Checker("black"), color: "black", row: 3, col: 2 },
        { piece: null, color: "white", row: 3, col: 3 }
      ]
    ];
    expect(game.board).toEqual(expected);
  });
});

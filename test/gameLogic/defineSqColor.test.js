const defineSqColor = require("../../server/gameLogic/defineSqColor");

describe("defineSqColor", function() {
  it("should check return black if given a row and col sum that is odd", function() {
    const actual = defineSqColor(1, 2);
    expect(actual).toEqual("black");
  });
  it("should check return white if given a row and col sum that is even", function() {
    const actual = defineSqColor(2, 2);
    expect(actual).toEqual("white");
  });
});

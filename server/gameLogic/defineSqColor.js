module.exports = (row, col) => {
  if ((row + col) % 2 === 1) return "black";
  else return "white";
};

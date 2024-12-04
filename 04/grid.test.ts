import { Grid } from "./grid";

describe("Grid.findXmas()", () => {
  it("finds all X coords where full word XMAS starts", () => {
    const grid = new Grid([
      [".", ".", "X", ".", ".", "."],
      [".", "S", "A", "M", "X", "."],
      [".", "A", ".", ".", "A", "."],
      ["X", "M", "A", "S", ".", "S"],
      [".", "X", ".", ".", ".", "."],
    ]);

    const expected = [
      [0, 2, 1],
      [1, 4, 1],
      [3, 0, 1],
      [4, 1, 1],
    ];

    expect(grid.findXmas()).toEqual(expected);
  });

  it("finds all X coords where full word XMAS starts on bigger grid", () => {
    const grid = new Grid([
      ["M", "M", "M", "S", "X", "X", "M", "A", "S", "M"],
      ["M", "S", "A", "M", "X", "M", "S", "M", "S", "A"],
      ["A", "M", "X", "S", "X", "M", "A", "A", "M", "M"],
      ["M", "S", "A", "M", "A", "S", "M", "S", "M", "X"],
      ["X", "M", "A", "S", "A", "M", "X", "A", "M", "M"],
      ["X", "X", "A", "M", "M", "X", "X", "A", "M", "A"],
      ["S", "M", "S", "M", "S", "A", "S", "X", "S", "S"],
      ["S", "A", "X", "A", "M", "A", "S", "A", "A", "A"],
      ["M", "A", "M", "M", "M", "X", "M", "M", "M", "M"],
      ["M", "X", "M", "X", "A", "X", "M", "A", "S", "X"],
    ]);

    const occurrences = grid
      .findXmas()
      .reduce((sum, coord) => sum + coord[2], 0);
    expect(occurrences).toBe(18);
  });
});

import { Grid } from "./grid";

describe("Grid.at()", () => {
  it("return elem at coords", () => {
    const grid = new Grid([
      [1, 2],
      [3, 4],
    ]);

    expect(grid.at(0, 0)).toBe(1);
    expect(grid.at(1, 1)).toBe(4);
  });
});

import { Grid } from "./grid";

describe("Grid.simulateStepsUntilOut()", () => {
  it("step-by-step simulation until guard walks out of the map", () => {
    const grid = new Grid([
      [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", "#", ".", ".", "^", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
      ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
    ]);
    grid.simulateStepsUntilOut();
    expect(grid.isGuardOut()).toBe(true);
  });
});

describe("Grid.countVisited()", () => {
  it("after simulation, counts distinct visited coords", () => {
    const grid = new Grid([
      [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", "#", ".", ".", "^", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
      ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
    ]);
    grid.simulateStepsUntilOut();
    expect(grid.countVisited()).toBe(41);
  });
});

describe("Grid.stepUntilObstacleOrEdge()", () => {
  it("follows the same direction until edge", () => {
    const grid = new Grid([
      ["."],
      ["."],
      ["."],
      ["."],
      ["."],
      ["."],
      ["."],
      ["^"],
    ]);
    grid.stepUntilObstacleOrEdge();

    expect(grid.isGuardOut()).toBe(true);
  });

  it("follows the same direction until obstacle", () => {
    const grid = new Grid([
      ["."],
      ["."],
      ["#"],
      ["."],
      ["."],
      ["."],
      ["."],
      ["^"],
    ]);
    grid.stepUntilObstacleOrEdge();

    expect(grid.isGuardOut()).toBe(false);
    expect(grid.getGrid()).toEqual([
      ["."],
      ["."],
      ["#"],
      ["."],
      ["X"],
      ["X"],
      ["X"],
      ["X"],
    ]);
  });
});

describe("Grid.isGuardOut()", () => {
  it("returns false at the start", () => {
    const grid = new Grid([["^"]]);

    expect(grid.isGuardOut()).toBe(false);
  });

  it("return true if guard steps out", () => {
    const grid = new Grid([["^"]]);
    grid.takeStep();

    expect(grid.isGuardOut()).toBe(true);
  });
});

describe("Grid.takeStep()", () => {
  it("marks the previous position with X", () => {
    const grid = new Grid([["."], ["^"]]);
    grid.takeStep();

    expect(grid.at(1, 0)).toEqual("X");
  });
});

describe("Grid.turnRight()", () => {
  it("changes the current direction by 90 degrees right", () => {
    const grid = new Grid([["."], ["^"]]);
    grid.turnRight();
    grid.takeStep();

    // the guard went east, not north
    expect(grid.isGuardOut()).toBe(true);
  });
});

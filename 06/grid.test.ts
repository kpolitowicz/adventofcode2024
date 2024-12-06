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

  it("stop simulation when loop is detected", () => {
    const grid = new Grid([
      [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", "#", ".", "#", "^", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
      ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
    ]);
    grid.simulateStepsUntilOut();
    expect(grid.isGuardOut()).toBe(false);
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

describe("Grid.countLoopPositions()", () => {
  it("should count position where added obstacle causes loop", () => {
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
    expect(grid.countLoopPositions()).toBe(6);
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

describe("Grid.isStartingPosAndDir()", () => {
  it("returns true at the start, but not after", () => {
    const grid = new Grid([["."], ["^"]]);

    expect(grid.isStartingPosAndDir()).toBe(true);

    grid.takeStep();
    expect(grid.isStartingPosAndDir()).toBe(false);
  });
});

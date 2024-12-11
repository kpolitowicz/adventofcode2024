import { Grid } from "./grid";
import {
  Coord,
  findTrailheads,
  findTrails,
  findUniquePeaks,
} from "./trail_finder";

const grid = new Grid([
  [8, 9, 0, 1, 0, 1, 2, 3],
  [7, 8, 1, 2, 1, 8, 7, 4],
  [8, 7, 4, 3, 0, 9, 6, 5],
  [9, 6, 5, 4, 9, 8, 7, 4],
  [4, 5, 6, 7, 8, 9, 0, 3],
  [3, 2, 0, 1, 9, 0, 1, 2],
  [0, 1, 3, 2, 9, 8, 0, 1],
  [1, 0, 4, 5, 6, 7, 3, 2],
]);

describe("findTrails()", () => {
  it("return map of all trailheads with all reachable peaks", () => {
    const trails = findTrails(grid);
    const numPeaks = new Array<number>();
    trails.forEach((peaks) => numPeaks.push(peaks.length));
    expect(numPeaks).toEqual([5, 6, 5, 3, 1, 3, 5, 3, 5]);
  });
});

describe("findTrailheads()", () => {
  it("return list of coords with 0s", () => {
    expect(findTrailheads(grid)).toEqual([
      new Coord(0, 2),
      new Coord(0, 4),
      new Coord(2, 4),
      new Coord(4, 6),
      new Coord(5, 2),
      new Coord(5, 5),
      new Coord(6, 0),
      new Coord(6, 6),
      new Coord(7, 1),
    ]);
  });
});

describe("findUniquePeaks()", () => {
  it("return list of all reachable peaks", () => {
    expect(findUniquePeaks(grid, new Coord(5, 2))).toEqual([new Coord(6, 4)]);
    expect(findUniquePeaks(grid, new Coord(7, 1))).toEqual([
      new Coord(0, 1),
      new Coord(3, 0),
      new Coord(3, 4),
      new Coord(4, 5),
      new Coord(5, 4),
    ]);
    expect(findUniquePeaks(grid, new Coord(6, 6))).toEqual([
      new Coord(2, 5),
      new Coord(4, 5),
      new Coord(3, 4),
    ]);
  });
});

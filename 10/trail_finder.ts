import { Grid } from "./grid";

export class Coord {
  constructor(
    public row: number,
    public col: number,
  ) {}
}

export function findTrails(grid: Grid): Map<Coord, Coord[]> {
  return findTrailheads(grid).reduce((trails, trailhead) => {
    trails.set(trailhead, findUniquePeaks(grid, trailhead));
    return trails;
  }, new Map<Coord, Coord[]>());
}

export function findTrailheads(grid: Grid): Coord[] {
  const res = [];
  for (let r = 0; r < grid.height(); r++) {
    for (let c = 0; c < grid.width(); c++) {
      if (grid.at(r, c) === 0) {
        res.push(new Coord(r, c));
      }
    }
  }
  return res;
}

export function findUniquePeaks(grid: Grid, start: Coord): Coord[] {
  const currAlt = grid.at(start.row, start.col);
  // console.log(`(${start.row},${start.col}): ${currAlt}`);
  if (currAlt === 9) {
    return [start];
  }

  const res: Coord[] = [];
  const directions = [
    new Coord(-1, 0),
    new Coord(0, 1),
    new Coord(1, 0),
    new Coord(0, -1),
  ];

  directions.forEach((dir) => {
    const nextCoord = new Coord(start.row + dir.row, start.col + dir.col);
    const nextAlt = grid.at(nextCoord.row, nextCoord.col);
    if (nextAlt === currAlt + 1) {
      res.push(...findUniquePeaks(grid, nextCoord));
    }
  });

  return unique(res);
}

// https://stackoverflow.com/questions/47840061/how-to-remove-duplicates-from-a-typescript-array
function unique(ary: Coord[]): Coord[] {
  return ary.filter(
    (value, index, array) =>
      !array.filter((v, i) => isEqual(value, v) && i < index).length,
  );
}

function isEqual(a: Coord, b: Coord): boolean {
  return a.row === b.row && a.col === b.col;
}

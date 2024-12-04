export class Grid {
  grid: string[][];

  constructor(lines: string[][]) {
    this.grid = lines;
  }

  findXmas(): number[][] {
    return this.findXses()
      .map((coord) => [...coord, this.countXmas(coord)])
      .filter((coord) => coord[2] > 0);
  }

  findXses(): number[][] {
    const coords: number[][] = [];

    for (let i = 0; i < this.gridHeight(); i++) {
      for (let j = 0; j < this.gridWidth(); j++) {
        if (this.at(i, j) == "X") {
          coords.push([i, j]);
        }
      }
    }

    return coords;
  }

  countXmas(coord: number[]): number {
    const directions = [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ];

    let count = 0;
    directions.forEach((dir) => {
      if (this.isXmasInD(coord, dir)) {
        count++;
      }
    });

    return count;
  }

  isXmasInD(coord: number[], dir: number[]): boolean {
    return (
      this.at(coord[0] + dir[0], coord[1] + dir[1]) == "M" &&
      this.at(coord[0] + 2 * dir[0], coord[1] + 2 * dir[1]) == "A" &&
      this.at(coord[0] + 3 * dir[0], coord[1] + 3 * dir[1]) == "S"
    );
  }

  gridWidth(): number {
    return this.grid[0].length;
  }

  gridHeight(): number {
    return this.grid.length;
  }

  at(x: number, y: number): string {
    if (x < 0 || x >= this.gridHeight() || y < 0 || y >= this.gridWidth()) {
      return "?";
    }
    return this.grid[x][y];
  }
  // splitLine(line: string): string[] {
  //   return line.split("");
  // }
}

export class Grid {
  private grid: number[][];

  constructor(lines: number[][]) {
    this.grid = lines;
  }

  public width(): number {
    return this.grid[0].length;
  }

  public height(): number {
    return this.grid.length;
  }

  public at(x: number, y: number): number {
    if (x < 0 || x >= this.height() || y < 0 || y >= this.width()) {
      return -1;
    }
    return this.grid[x][y];
  }
}

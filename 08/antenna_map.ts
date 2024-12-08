export type Coord = {
  row: number;
  col: number;
};

export class AntennaMap {
  antennas: Map<string, Coord[]>;
  size: Coord;

  constructor(grid: string[][]) {
    this.antennas = new Map();
    this.size = {
      row: grid.length,
      col: grid[0].length,
    };

    for (let r = 0; r < this.size.row; r++) {
      for (let c = 0; c < this.size.col; c++) {
        this.maybeAddAntenna(grid[r][c], r, c);
      }
    }
  }

  maybeAddAntenna(item: string, row: number, col: number) {
    if (item == ".") {
      return;
    }

    const current = this.antennas.get(item) || [];
    current.push({ row: row, col: col });
    this.antennas.set(item, current);
  }

  getAntennas(): Map<string, Coord[]> {
    return this.antennas;
  }

  getSize(): Coord {
    return this.size;
  }
}

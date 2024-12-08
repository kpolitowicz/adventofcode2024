import { AntennaMap, Coord } from "./antenna_map";

export class AntinodeFinder {
  antennaMap: AntennaMap;

  constructor(antennas: AntennaMap) {
    this.antennaMap = antennas;
  }

  findAntinodes(): Map<string, Coord[]> {
    const res = new Map<string, Coord[]>();

    this.antennaMap.getAntennas().forEach((v, k) => {
      const current = res.get(k) || [];
      res.set(k, [...current, ...this.antinodesForCoords(v)]);
    });

    return res;
  }

  antinodesForCoords(coords: Coord[]): Coord[] {
    return this.allPairs(coords)
      .map((pair) => this.antinodesForPair(pair))
      .flat()
      .filter((coord) => this.onTheMap(coord));
  }

  allPairs(coords: Coord[]): Coord[][] {
    const res = [];

    for (let i = 0; i < coords.length; i++) {
      for (let j = i + 1; j < coords.length; j++) {
        res.push([coords[i], coords[j]]);
      }
    }

    return res;
  }

  antinodesForPair(pair: Coord[]): Coord[] {
    const [coord1, coord2] = pair;

    return [
      {
        row: coord1.row + (coord1.row - coord2.row),
        col: coord1.col + (coord1.col - coord2.col),
      },
      {
        row: coord2.row + (coord2.row - coord1.row),
        col: coord2.col + (coord2.col - coord1.col),
      },
    ];
  }

  onTheMap(coord: Coord): boolean {
    const mapSize = this.antennaMap.getSize();
    return (
      coord.row >= 0 &&
      coord.row < mapSize.row &&
      coord.col >= 0 &&
      coord.col < mapSize.col
    );
  }
}

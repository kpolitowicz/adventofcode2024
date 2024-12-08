import { InputParser } from "./input_parser";
import { AntennaMap, Coord } from "./antenna_map";
import { AntinodeFinder } from "./antinode_finder";

export function firstAnswer(input: string): number {
  const gridInput = new InputParser().parse(input);
  const townMap = new AntennaMap(gridInput);
  const antinodes = new AntinodeFinder(townMap).findAntinodes();

  let list: Coord[] = [];
  antinodes.forEach((v, k) => (list = [...list, ...v]));

  return unique(list).length;
}

export function secondAnswer(input: string): number {
  const gridInput = new InputParser().parse(input);

  const townMap = new AntennaMap(gridInput);
  const antinodes = new AntinodeFinder(townMap).findAntinodesWithResonance();

  let list: Coord[] = [];
  antinodes.forEach((v, k) => (list = [...list, ...v]));

  return unique(list).length;
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

import { AntennaMap, Coord } from "./antenna_map";
import { AntinodeFinder } from "./antinode_finder";

describe("AntinodeFinder.findAntinodes()", () => {
  it("list all antinodes created by antennas on the map", () => {
    const antennas = new AntennaMap([
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "A", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "A", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "A", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ]);
    const antinodes = new AntinodeFinder(antennas).findAntinodes();

    expect(antinodes.size).toBe(1);
    expect(antinodes.get("A")?.length).toBe(5);
  });
});

describe("antinodesForCoords()", () => {
  it("list all antinodes created by set of coords", () => {
    const finder = new AntinodeFinder(
      new AntennaMap([
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "0", ".", ".", "."],
        [".", ".", ".", ".", ".", "0", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "0", ".", ".", ".", "."],
        [".", ".", ".", ".", "0", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "A", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "A", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "A", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      ]),
    );
    const coords = [
      { row: 2, col: 5 },
      { row: 4, col: 4 },
    ] as Coord[];

    expect(finder.antinodesForCoords(coords)).toEqual([
      { row: 0, col: 6 },
      { row: 6, col: 3 },
    ]);
  });

  it("does not list antinodes outside of the map", () => {
    const finder = new AntinodeFinder(
      new AntennaMap([
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "0", ".", ".", "."],
        [".", ".", ".", ".", ".", "0", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "0", ".", ".", ".", "."],
        [".", ".", ".", ".", "0", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "A", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "A", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "A", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      ]),
    );
    const coords = [
      { row: 0, col: 0 },
      { row: 1, col: 1 },
    ] as Coord[];

    expect(finder.antinodesForCoords(coords)).toEqual([{ row: 2, col: 2 }]);
  });
});

describe("allPairs()", () => {
  it("generates all possible pairs from a list of 3", () => {
    const finder = new AntinodeFinder(new AntennaMap([["."]]));
    const coords = [
      { row: 1, col: 1 },
      { row: 2, col: 2 },
      { row: 3, col: 3 },
    ] as Coord[];

    expect(finder.allPairs(coords)).toEqual([
      [
        { row: 1, col: 1 },
        { row: 2, col: 2 },
      ],
      [
        { row: 1, col: 1 },
        { row: 3, col: 3 },
      ],
      [
        { row: 2, col: 2 },
        { row: 3, col: 3 },
      ],
    ]);
  });

  it("returns just one pair for 2", () => {
    const finder = new AntinodeFinder(new AntennaMap([["."]]));
    const coords = [
      { row: 2, col: 5 },
      { row: 4, col: 4 },
    ] as Coord[];

    expect(finder.allPairs(coords)).toEqual([
      [
        { row: 2, col: 5 },
        { row: 4, col: 4 },
      ],
    ]);
  });
});

describe("antinodesForPair()", () => {
  it("list all antinodes created by pair of coords", () => {
    const finder = new AntinodeFinder(new AntennaMap([["."]]));
    const coords = [
      { row: 2, col: 5 },
      { row: 4, col: 4 },
    ] as Coord[];

    expect(finder.antinodesForPair(coords)).toEqual([
      { row: 0, col: 6 },
      { row: 6, col: 3 },
    ]);
  });
});

describe("antinodesForPairWithResonance()", () => {
  it("list all antinodes created by pair of coords", () => {
    const finder = new AntinodeFinder(
      new AntennaMap([
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "0", ".", ".", "."],
        [".", ".", ".", ".", ".", "0", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "0", ".", ".", ".", "."],
        [".", ".", ".", ".", "0", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "A", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "A", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "A", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      ]),
    );
    const coords = [
      { row: 1, col: 2 },
      { row: 2, col: 1 },
    ] as Coord[];

    expect(finder.antinodesForPairWithResonance(coords)).toEqual([
      { row: 1, col: 2 },
      { row: 0, col: 3 },
      { row: 2, col: 1 },
      { row: 3, col: 0 },
    ]);
  });
});

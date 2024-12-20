import { AntennaMap } from "./antenna_map";

describe("new AntennaMap", () => {
  it("creates a map of antenna IDs with all coords", () => {
    const antennas = new AntennaMap([
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
    ]).getAntennas();
    expect(antennas.size).toBe(2);
    expect(antennas.get("0")?.length).toBe(4);
    expect(antennas.get("A")?.length).toBe(3);
  });

  it("stores the size of the original grid", () => {
    const size = new AntennaMap([
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
    ]).getSize();

    expect(size).toEqual({ row: 12, col: 12 });
  });
});

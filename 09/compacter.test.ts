import { Compacter, sumPos } from "./compacter";

describe("compactDisk()", () => {
  it("defragments the disk", () => {
    const diskMap = [2, 3, 3, 3, 1, 3, 3, 1, 2, 1, 4, 1, 4, 1, 3, 1, 4, 0, 2];
    const compacter = new Compacter(diskMap);
    compacter.compactDisk();
    expect(compacter.getBlocks()).toEqual([
      0, 0, 9, 9, 8, 1, 1, 1, 8, 8, 8, 2, 7, 7, 7, 3, 3, 3, 6, 4, 4, 6, 5, 5, 5,
      5, 6, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    ]);
  });

  it("defragments the disk for simpler example", () => {
    const diskMap = [1, 2, 3, 4, 5];
    const compacter = new Compacter(diskMap);
    compacter.compactDisk();
    expect(compacter.getBlocks()).toEqual([
      0, 2, 2, 1, 1, 1, 2, 2, 2, -1, -1, -1, -1, -1, -1,
    ]);
  });
});

describe("sumPos()", () => {
  it("sums up all position number to given lenght", () => {
    expect(sumPos(0, 2)).toBe(1);
    expect(sumPos(2, 3)).toBe(9);
    expect(sumPos(10, 9)).toBe(126);
  });
});

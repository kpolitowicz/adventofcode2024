import { calculateDistances, InputLists } from "./reconciler";

describe("calculateDistances()", () => {
  it("calculates distances between corresponding elems", () => {
    const input = {
      leftList: [3, 4, 2, 1, 3, 3],
      rightList: [4, 3, 5, 3, 9, 3],
    } as InputLists;

    expect(calculateDistances(input)).toEqual([2, 1, 0, 1, 2, 5]);
  });
});

import {
  calculateDistances,
  calculateSimilarities,
  InputLists,
} from "./reconciler";

describe("calculateDistances()", () => {
  it("calculates distances between corresponding elems", () => {
    const input = {
      leftList: [3, 4, 2, 1, 3, 3],
      rightList: [4, 3, 5, 3, 9, 3],
    } as InputLists;

    expect(calculateDistances(input)).toEqual([2, 1, 0, 1, 2, 5]);
  });
});

describe("calculateSimilarities()", () => {
  it("calculates similarities between corresponding elems", () => {
    const input = {
      leftList: [3, 4, 2, 1, 3, 3],
      rightList: [4, 3, 5, 3, 9, 3],
    } as InputLists;

    expect(calculateSimilarities(input)).toEqual([9, 4, 0, 0, 9, 9]);
  });
});

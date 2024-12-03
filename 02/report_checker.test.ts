import {
  determineSafety,
  determineSafetyWithProblemDampener,
} from "./report_checker";

describe("determineSafety()", () => {
  it("evals safety of reports (true == Safe)", () => {
    const input = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];

    expect(determineSafety(input)).toEqual([
      true,
      false,
      false,
      false,
      false,
      true,
    ]);
  });
});

describe("determineSafetyWithProblemDampener()", () => {
  it("evals safety of reports (true == Safe)", () => {
    const input = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];

    expect(determineSafetyWithProblemDampener(input)).toEqual([
      true,
      false,
      false,
      true,
      true,
      true,
    ]);
  });
});

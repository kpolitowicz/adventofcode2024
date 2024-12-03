import { firstAnswer, secondAnswer } from "./answerer";

describe("Answer 1", () => {
  it("matches the example answer", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

    const actual = firstAnswer(input);
    expect(actual).toBe(2);
  });
});

describe("Answer 2", () => {
  it("matches the example answer", () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3
`;

    const actual = secondAnswer(input);
    expect(actual).toBe(0);
  });
});

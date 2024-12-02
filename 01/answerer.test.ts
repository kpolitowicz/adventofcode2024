import { firstAnswer, secondAnswer } from "./answerer";

describe("Answer 1", () => {
  it("matches the example answer", () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`;

    const actual = firstAnswer(input);
    expect(actual).toBe(11);
  });
});

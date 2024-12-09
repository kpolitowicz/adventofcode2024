import { firstAnswer, secondAnswer } from "./answerer";

describe("Answer 1", () => {
  it("matches the example answer", () => {
    const input = `2333133121414131402
`;

    const actual = firstAnswer(input);
    expect(actual).toBe(1928);
  });
});

describe("Answer 2", () => {
  it("matches the example answer", () => {
    const input = `2333133121414131402
`;

    const actual = secondAnswer(input);
    expect(actual).toBe(0);
  });
});

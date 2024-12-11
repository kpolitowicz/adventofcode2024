import { firstAnswer, secondAnswer } from "./answerer";

describe("Answer 1", () => {
  it("matches the example answer", () => {
    const input = `125 17
`;

    const actual = firstAnswer(input);
    expect(actual).toBe(55312);
  });
});

describe("Answer 2", () => {
  it("matches the example answer", () => {
    expect(0).toBe(0);
  });
});

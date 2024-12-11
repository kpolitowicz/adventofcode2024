import { firstAnswer, secondAnswer } from "./answerer";

describe("Answer 1", () => {
  it("matches the example answer", () => {
    const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732
`;

    const actual = firstAnswer(input);
    expect(actual).toBe(36);
  });
});

describe("Answer 2", () => {
  it("matches the example answer", () => {
    const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732
`;

    const actual = secondAnswer(input);
    expect(actual).toBe(81);
  });
});

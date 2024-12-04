import { firstAnswer, secondAnswer } from "./answerer";

describe("Answer 1", () => {
  it("matches the example answer", () => {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`;

    const actual = firstAnswer(input);
    expect(actual).toBe(18);
  });
});

describe("Answer 2", () => {
  it("matches the example answer", () => {
    const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
`;
    const actual = secondAnswer(input);
    expect(actual).toBe(0);
  });
});

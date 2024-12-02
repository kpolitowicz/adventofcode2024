import { firstAnswer, secondAnswer } from "./answerer";

test("Answer 1 example", () => {
  const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`;

  const actual = firstAnswer(input);
  expect(actual).toBe(198);
});

test("Answer 2 example", () => {
  const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`;

  const actual = secondAnswer(input);
  expect(actual).toBe(230);
});

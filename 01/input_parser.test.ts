import { InputParser } from "./input_parser";

test("Parses input into strings", () => {
  const input = `00100
11110
10110
10111
`;
  const parser = new InputParser();
  const lines = parser.lines(input);

  expect(lines.length).toBe(4);
  expect(lines[lines.length - 1]).toBe("10111");
});

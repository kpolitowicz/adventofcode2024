import { InputParser } from "./input_parser";

describe("inputParser.parse()", () => {
  it("parses input array of num arrays", () => {
    const input = `..X...
.SAMX.
.A..A.
XMAS.S
.X....
`;

    const parsedInput = new InputParser().parse(input);

    expect(parsedInput).toEqual([
      [".", ".", "X", ".", ".", "."],
      [".", "S", "A", "M", "X", "."],
      [".", "A", ".", ".", "A", "."],
      ["X", "M", "A", "S", ".", "S"],
      [".", "X", ".", ".", ".", "."],
    ]);
  });
});

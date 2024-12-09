import { InputParser } from "./input_parser";

describe("inputParser.parse()", () => {
  it("parses input array of numbers", () => {
    const input = `2333133121414131402
`;

    const parsedInput = new InputParser().parse(input);

    expect(parsedInput).toEqual([
      2, 3, 3, 3, 1, 3, 3, 1, 2, 1, 4, 1, 4, 1, 3, 1, 4, 0, 2,
    ]);
  });
});

import { InputParser } from "./input_parser";

describe("inputParser.parse()", () => {
  it("parses input into left and right arrays", () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3
`;
    const parser = new InputParser();
    const parsedInput = parser.parse(input);

    expect(parsedInput.leftList).toEqual([3, 4, 2, 1, 3, 3]);
    expect(parsedInput.rightList).toEqual([4, 3, 5, 3, 9, 3]);
  });
});

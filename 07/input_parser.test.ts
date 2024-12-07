import { InputParser } from "./input_parser";

describe("inputParser.parse()", () => {
  it("parses input array of num arrays", () => {
    const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20
`;

    const parsedInput = new InputParser().parse(input);

    expect(parsedInput).toEqual([
      [190, 10, 19],
      [3267, 81, 40, 27],
      [83, 17, 5],
      [156, 15, 6],
      [7290, 6, 8, 6, 15],
      [161011, 16, 10, 13],
      [192, 17, 8, 14],
      [21037, 9, 7, 18, 13],
      [292, 11, 6, 16, 20],
    ]);
  });
});

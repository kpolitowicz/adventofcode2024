import { InputParser } from "./input_parser";

describe("inputParser.parse()", () => {
  it("parses input array of num arrays", () => {
    const input = `125 17
`;

    const parsedInput = new InputParser().parse(input);

    expect(parsedInput).toEqual([125, 17]);
  });
});

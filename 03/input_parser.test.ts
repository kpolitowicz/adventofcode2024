import { InputParser } from "./input_parser";

describe("inputParser.parse()", () => {
  it("parses input array of num arrays", () => {
    const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
`;

    const parsedInput = new InputParser().parse(input);

    expect(parsedInput).toEqual([
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
    ]);
  });
});

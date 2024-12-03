import { addUpMuls, addUpMulsWithCond } from "./memory_checker";

describe("addUpMuls()", () => {
  it("finds, multiplies and sums up all the muls", () => {
    const input = [
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
    ];

    expect(addUpMuls(input)).toBe(161);
  });
});

describe("addUpMulsWithCond()", () => {
  it("adds up all the ENABLED muls", () => {
    const input = [
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64]do()(mul(11,8)undo()?mul(8,5))",
    ];

    expect(addUpMulsWithCond(input)).toBe(232);
  });
});

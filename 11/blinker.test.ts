import { blinkTimes, blink } from "./blinker";

describe("blinkTimes()", () => {
  it("simulates a number of blinks", () => {
    const stones = [125, 17];
    expect(blinkTimes(stones, 2)).toEqual([253, 0, 2024, 14168]);
  });
});

describe("blink()", () => {
  it("should change the stones according to the rules", () => {
    const stones = [125, 17];
    expect(blink(stones)).toEqual([253000, 1, 7]);
  });
});

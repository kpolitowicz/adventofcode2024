import { blinkTimes, blink, blinkLen } from "./blinker";

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

describe("blinkLen()", () => {
  it("calculates number of stones after x blinks", () => {
    expect(blinkLen(0, 1)).toEqual(1);
    expect(blinkLen(0, 2)).toEqual(1);
    expect(blinkLen(0, 3)).toEqual(2);
    expect(blinkLen(0, 25)).toEqual(19778);
  });
});

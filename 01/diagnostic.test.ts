import { DiagnosticCalculator } from "./diagnostic";

test("Adds entries to the state", () => {
  const calc = new DiagnosticCalculator();
  calc.add("01");
  calc.add("10");

  expect(calc.raw.length).toBe(2);
  expect(calc.raw[0]).toBe("01");
});

test("Counts bit values after each add", () => {
  const calc = new DiagnosticCalculator();
  calc.add("01");

  expect(calc.readings.length).toBe(2);

  expect(calc.readings[0].zeroes).toBe(1);
  expect(calc.readings[0].ones).toBe(0);

  expect(calc.readings[1].zeroes).toBe(0);
  expect(calc.readings[1].ones).toBe(1);
});

test("Calculates gamma rate", () => {
  const calc = new DiagnosticCalculator();
  calc.add("01");
  calc.add("10");
  calc.add("01");

  // 01 is the most used
  expect(calc.gammaRate()).toBe(1);
});

test("Calculates epsilon rate", () => {
  const calc = new DiagnosticCalculator();
  calc.add("011");
  calc.add("101");
  calc.add("010");

  // 100 are the less used bit values on each position
  expect(calc.epsilonRate()).toBe(4);
});

test("Calculates oxygen generator rating", () => {
  const calc = new DiagnosticCalculator();
  calc.add("00100");
  calc.add("11110");
  calc.add("10110");
  calc.add("10111");
  calc.add("10101");
  calc.add("01111");
  calc.add("00111");
  calc.add("11100");
  calc.add("10000");
  calc.add("11001");
  calc.add("00010");
  calc.add("01010");

  expect(calc.oxygenRating()).toBe(23);
});

test("Calculates CO2 scrubber rating", () => {
  const calc = new DiagnosticCalculator();
  calc.add("00100");
  calc.add("11110");
  calc.add("10110");
  calc.add("10111");
  calc.add("10101");
  calc.add("01111");
  calc.add("00111");
  calc.add("11100");
  calc.add("10000");
  calc.add("11001");
  calc.add("00010");
  calc.add("01010");

  expect(calc.scrubberRating()).toBe(10);
});

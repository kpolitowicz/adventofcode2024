import { Equation, Equations } from "./equations";

describe("Equations.filterWorking()", () => {
  it("finds all equations that work with at least one choice of operators", () => {
    const checker = new Equations([
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
    expect(checker.filterWorking().length).toBe(3);
  });
});

describe("Equations.filterWorkingWithConcat()", () => {
  it("finds all equations that work with at least one choice of operators", () => {
    const checker = new Equations([
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
    expect(checker.filterWorkingWithConcat().length).toBe(6);
  });
});

describe("Equation.isWorking()", () => {
  it("true if equation components can produce the result with some combination of operators", () => {
    expect(new Equation([190, 10, 19]).isWorking()).toBe(true);
    expect(new Equation([87, 17, 5]).isWorking()).toBe(false);
    expect(new Equation([3267, 81, 40, 27]).isWorking()).toBe(true);
    expect(new Equation([292, 11, 6, 16, 20]).isWorking()).toBe(true);
  });
});

describe("Equation.isWorkingWithConcat()", () => {
  it("true if equation components can produce the result with some combination of operators", () => {
    expect(new Equation([87, 17, 5]).isWorkingWithConcat()).toBe(false);
    expect(new Equation([7290, 6, 8, 6, 15]).isWorkingWithConcat()).toBe(true);
  });
});

describe("Equation.opPermutations()", () => {
  it("returns every possible arrangement of +/* operators for given length", () => {
    const eq = new Equation([0]);

    expect(eq.opPermutations(1)).toEqual([["+"], ["*"]]);
    expect(eq.opPermutations(2)).toEqual([
      ["+", "+"],
      ["+", "*"],
      ["*", "+"],
      ["*", "*"],
    ]);
  });
});

describe("Equation.opPermutationsWithConcat()", () => {
  it("returns every possible arrangement of +/*/|| operators for given length", () => {
    const eq = new Equation([0]);

    expect(eq.opPermutationsWithConcat(1)).toEqual([["+"], ["*"], ["||"]]);
    expect(eq.opPermutationsWithConcat(2)).toEqual([
      ["+", "+"],
      ["+", "*"],
      ["+", "||"],
      ["*", "+"],
      ["*", "*"],
      ["*", "||"],
      ["||", "+"],
      ["||", "*"],
      ["||", "||"],
    ]);
  });
});

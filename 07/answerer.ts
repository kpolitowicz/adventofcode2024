import { InputParser } from "./input_parser";
import { Equations } from "./equations";

export function firstAnswer(input: string): number {
  const eqInput = new InputParser().parse(input);
  const equations = new Equations(eqInput);

  return equations
    .filterWorking()
    .map((equation) => equation.getResult())
    .reduce((sum, num) => sum + num, 0);
}

export function secondAnswer(input: string): number {
  const eqInput = new InputParser().parse(input);
  const equations = new Equations(eqInput);

  return equations
    .filterWorkingWithConcat()
    .map((equation) => equation.getResult())
    .reduce((sum, num) => sum + num, 0);
}

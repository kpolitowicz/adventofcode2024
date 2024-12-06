import { InputParser } from "./input_parser";
import { Grid } from "./grid";

export function firstAnswer(input: string): number {
  const gridInput = new InputParser().parse(input);
  const grid = new Grid(gridInput);
  grid.simulateStepsUntilOut();

  return grid.countVisited();
}

export function secondAnswer(input: string): number {
  const gridInput = new InputParser().parse(input);
  const grid = new Grid(gridInput);

  return 0;
}

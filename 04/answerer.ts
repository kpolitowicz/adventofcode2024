import { InputParser } from "./input_parser";
import { Grid } from "./grid";

export function firstAnswer(input: string): number {
  const gridInput = new InputParser().parse(input);
  const grid = new Grid(gridInput);
  const occurrences = grid.findXmas().reduce((sum, coord) => sum + coord[2], 0);

  return occurrences;
}

export function secondAnswer(input: string): number {
  const parsedInput = new InputParser().parse(input);
  return 0;
}

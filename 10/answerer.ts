import { InputParser } from "./input_parser";
import { Grid } from "./grid";
import { findTrails } from "./trail_finder";

export function firstAnswer(input: string): number {
  const gridInput = new InputParser().parse(input);
  const grid = new Grid(gridInput);

  const trails = findTrails(grid);
  let sum = 0;
  trails.forEach((peaks) => (sum += peaks.length));
  return sum;
}

export function secondAnswer(input: string): number {
  const gridInput = new InputParser().parse(input);
  const grid = new Grid(gridInput);

  return 0;
}

import { InputLists, InputParser } from "./input_parser";
import { calculateDistances } from "./reconciler";

export function firstAnswer(input: string): number {
  const parsedInput: InputLists = new InputParser().parse(input);
  const dist = calculateDistances(parsedInput);

  return dist.reduce((sum, current) => sum + current, 0);
}

// FIXME: this is soooo inefficient!
// I need to switch from mutating state for these problems!
export function secondAnswer(input: string): number {
  return 0;
}

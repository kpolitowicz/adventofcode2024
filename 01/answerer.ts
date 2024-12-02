import { InputParser } from "./input_parser";
import { calculateDistances, calculateSimilarities } from "./reconciler";

export function firstAnswer(input: string): number {
  const parsedInput = new InputParser().parse(input);
  const dist = calculateDistances(parsedInput);

  return dist.reduce((sum, current) => sum + current, 0);
}

export function secondAnswer(input: string): number {
  const parsedInput = new InputParser().parse(input);
  const dist = calculateSimilarities(parsedInput);

  return dist.reduce((sum, current) => sum + current, 0);
}

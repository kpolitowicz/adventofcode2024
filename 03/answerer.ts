import { InputParser } from "./input_parser";
import { addUpMuls, addUpMulsWithCond } from "./memory_checker";

export function firstAnswer(input: string): number {
  const parsedInput = new InputParser().parse(input);
  return addUpMuls(parsedInput);
}

export function secondAnswer(input: string): number {
  const parsedInput = new InputParser().parse(input);
  return addUpMulsWithCond(parsedInput);
}

import { InputParser } from "./input_parser";
import { Compacter } from "./compacter";

export function firstAnswer(input: string): number {
  const diskMap = new InputParser().parse(input);
  const compacter = new Compacter(diskMap);
  compacter.compactDisk();

  return compacter
    .getBlocks()
    .map((num) => Math.max(0, num))
    .reduce((sum, num, pos) => sum + num * pos);
}

export function secondAnswer(input: string): number {
  return 0;
}

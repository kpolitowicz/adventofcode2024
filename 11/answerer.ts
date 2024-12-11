import { blinkTimes, blinkLen } from "./blinker";
import { InputParser } from "./input_parser";

export function firstAnswer(input: string): number {
  const startingStones = new InputParser().parse(input);
  const updatedStones = blinkTimes(startingStones, 25);

  return updatedStones.length;
}

export function secondAnswer(input: string): number {
  const startingStones = new InputParser().parse(input);

  return startingStones.reduce((sum, stone) => {
    return sum + blinkLen(stone, 75);
  }, 0);
}

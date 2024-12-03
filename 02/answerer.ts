import { InputParser } from "./input_parser";
import { determineSafety } from "./report_checker";

export function firstAnswer(input: string): number {
  const parsedInput = new InputParser().parse(input);
  const reportSafety = determineSafety(parsedInput);

  return reportSafety.filter((report) => {
    return report;
  }).length;
}

export function secondAnswer(input: string): number {
  return 0;
}

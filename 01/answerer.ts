import { InputParser } from "./input_parser";
import { DiagnosticCalculator } from "./diagnostic";

export function firstAnswer(input: string): number {
  const parser = new InputParser();
  const outputs = parser.parse(input);

  const calc = new DiagnosticCalculator();
  for (const entry of outputs) {
    calc.add(entry);
  }

  return calc.gammaRate() * calc.epsilonRate();
}

// FIXME: this is soooo inefficient!
// I need to switch from mutating state for these problems!
export function secondAnswer(input: string): number {
  const parser = new InputParser();
  const outputs = parser.parse(input);

  const calc1 = new DiagnosticCalculator();
  const calc2 = new DiagnosticCalculator();
  for (const entry of outputs) {
    calc1.add(entry);
    calc2.add(entry);
  }

  return calc1.oxygenRating() * calc2.scrubberRating();
}

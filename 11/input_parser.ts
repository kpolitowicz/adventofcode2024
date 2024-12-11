export class InputParser {
  parse(input: string): number[] {
    return this.lines(input)[0]
      .split(" ")
      .map((char) => parseInt(char) ?? -1);
  }

  // Read the input file's string, split along the lines, remove the last (empty) line
  lines(input: string): string[] {
    return input.split("\n").slice(0, -1);
  }
}

export class InputParser {
  parse(input: string): [number[][], number[][]] {
    const rules: number[][] = [];
    const updates: number[][] = [];

    let updatesStarted = false;
    this.lines(input).forEach((line) => {
      if (line == "") {
        updatesStarted = true;
      } else if (updatesStarted) {
        updates.push(line.split(",").map((n) => parseInt(n) || 0));
      } else {
        rules.push(line.split("|").map((n) => parseInt(n) || 0));
      }
    });

    return [rules, updates];
  }

  // Read the input file's string, split along the lines, remove the last (empty) line
  lines(input: string): string[] {
    return input.split("\n").slice(0, -1);
  }
}

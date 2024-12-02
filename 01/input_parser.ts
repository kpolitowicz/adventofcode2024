export class Command {
  cmd: string;
  x: number;

  constructor(cmd: string, x: number) {
    this.cmd = cmd;
    this.x = x;
  }
}

export class InputParser {
  parse(input: string): string[] {
    return this.lines(input);
  }

  // Read the input file's string, split along the lines, remove the last (empty) line
  lines(input: string): string[] {
    return input.split("\n").slice(0, -1);
  }
}

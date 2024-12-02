export type InputLists = {
  leftList: number[];
  rightList: number[];
};

export class InputParser {
  parse(input: string): InputLists {
    const parsedInput = {
      leftList: [],
      rightList: [],
    } as InputLists;

    const ll = this.lines(input);
    ll.forEach((v) => {
      const nums = v.split("   ");
      parsedInput.leftList.push(parseInt(nums[0]));
      parsedInput.rightList.push(parseInt(nums[1]));
    });

    return parsedInput;
  }

  // Read the input file's string, split along the lines, remove the last (empty) line
  lines(input: string): string[] {
    return input.split("\n").slice(0, -1);
  }
}

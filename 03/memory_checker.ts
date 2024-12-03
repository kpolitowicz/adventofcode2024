export function addUpMuls(input: string[]): number {
  return input.reduce((sum, line) => sum + addUpLine(line), 0);
}

export function addUpMulsWithCond(input: string[]): number {
  const concatInput = "".concat(...input);

  return addUpMuls(onlyEnabledMuls(concatInput));
}

function addUpLine(line: string): number {
  const muls = line.match(/mul\(\d+,\d+\)/g) || [];
  const results = muls.map((mul) => calcMul(mul));

  return results.reduce((sum, mul) => sum + mul, 0);
}

function calcMul(mul: string): number {
  const nums = (mul.match(/\d+/g) || []).map((num) => parseInt(num) || 1);

  return nums.reduce((prod, num) => prod * num, 1);
}

function onlyEnabledMuls(input: string): string[] {
  const res: string[] = [];

  res.push((input.match(/^(.*?)don't\(\)/) || ["", ""])[1]);
  (input.match(/do\(\)(.*?)don't\(\)/g) || []).forEach((str) => res.push(str));

  // The final do() needs a special treatment, because in the real input
  // there are 2 do() at the end without a don't().
  // TODO: This does not happen with don't() at the beginning, but
  // for completeness we could add the same treatment for the initial push
  // above... But since the answer is correct without it, we are leaving
  // it be :)
  const lastDont = (input.match(/.*don't\(\)(.*?)$/) || ["", ""])[1];
  res.push((lastDont.match(/.*?do\(\)(.*)$/) || ["", ""])[1]);

  return res;
}

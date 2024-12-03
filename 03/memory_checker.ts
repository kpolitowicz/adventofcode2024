export function addUpMuls(input: string[]): number {
  return input.reduce((sum, line) => sum + addUpLine(line), 0);
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

export function determineSafety(input: number[][]): boolean[] {
  return input.map((report) => isReportSafe(report));
}

export function determineSafetyWithProblemDampener(
  input: number[][],
): boolean[] {
  return input.map((report) => isReportSafeWithDampener(report));
}

function isReportSafe(report: number[]): boolean {
  const diffs: number[] = [];
  for (let i = 1; i < report.length; i++) {
    diffs.push(report[i] - report[i - 1]);
  }

  return isSameSign(diffs) && isSafeDiffs(diffs);
}

function isReportSafeWithDampener(report: number[]): boolean {
  const permutations = reportOneLessPermutations(report);

  return permutations.some((perm) => isReportSafe(perm));
}

function isSameSign(ary: Array<number>): boolean {
  return ary.every((num) => num < 0) || ary.every((num) => num > 0);
}

function isSafeDiffs(ary: Array<number>): boolean {
  return ary.every((num) => Math.abs(num) > 0 && Math.abs(num) < 4);
}

function reportOneLessPermutations(report: number[]): number[][] {
  const res: number[][] = [];

  for (let i = 0; i < report.length; i++) {
    const oneLess = report.filter((e, idx) => idx != i);
    res.push(oneLess);
  }

  return res;
}

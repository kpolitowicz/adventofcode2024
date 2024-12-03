export function determineSafety(input: number[][]): boolean[] {
  return input.map((report) => {
    return isReportSafe(report);
  });
}

function isReportSafe(report: number[]): boolean {
  const diffs: number[] = [];
  for (let i = 1; i < report.length; i++) {
    diffs.push(report[i] - report[i - 1]);
  }

  return isSameSign(diffs) && isSafeDiffs(diffs);
}

function isSameSign(ary: Array<number>): boolean {
  return (
    ary.every((num) => {
      return num < 0;
    }) ||
    ary.every((num) => {
      return num > 0;
    })
  );
}

function isSafeDiffs(ary: Array<number>): boolean {
  return ary.every((num) => {
    return Math.abs(num) > 0 && Math.abs(num) < 4;
  });
}

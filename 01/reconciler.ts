export type InputLists = {
  leftList: number[];
  rightList: number[];
};

export function calculateDistances(input: InputLists): number[] {
  const leftSorted = input.leftList.sort((n1, n2) => n1 - n2);
  const rightSorted = input.rightList.sort((n1, n2) => n1 - n2);

  const len = leftSorted.length;
  const toReturn = new Array<number>(len);
  for (let i = 0; i < len; i++) {
    toReturn[i] = Math.abs(leftSorted[i] - rightSorted[i]);
  }

  return toReturn;
}

export function calculateSimilarities(input: InputLists): number[] {
  const rightFreq = numFreq(input.rightList);

  return input.leftList.reduce((res, v) => {
    res.push(v * (rightFreq.get(v) || 0));
    return res;
  }, new Array<number>());
}

function numFreq(list: number[]): Map<number, number> {
  return list.reduce((res, v) => {
    return res.set(v, (res.get(v) || 0) + 1);
  }, new Map<number, number>());
}

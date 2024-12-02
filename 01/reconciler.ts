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

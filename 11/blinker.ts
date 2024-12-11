export function blinkTimes(stones: number[], cnt: number): number[] {
  for (let i = 0; i < cnt; i++) {
    stones = blink(stones);
  }
  return stones;
}

export function blink(stones: number[]): number[] {
  return stones.reduce((updated, stone) => {
    if (stone === 0) {
      updated.push(1);
    } else if (evenLen(stone)) {
      updated.push(...splitEvenLen(stone));
    } else {
      updated.push(stone * 2024);
    }
    return updated;
  }, new Array<number>());
}

function evenLen(stone: number): boolean {
  return stone.toString().length % 2 == 0;
}

function splitEvenLen(stone: number): number[] {
  const stoneStr = stone.toString();
  const len = stoneStr.length;
  const parts = [
    stoneStr.slice(0, Math.floor(len / 2)),
    stoneStr.slice(Math.floor(len / 2), len),
  ];
  return parts.map((s) => parseInt(s) ?? -1);
}

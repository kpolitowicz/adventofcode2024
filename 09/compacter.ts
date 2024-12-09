export class Compacter {
  blocks: number[];

  constructor(diskMap: number[]) {
    this.blocks = [];
    for (let i = 0; i < diskMap.length; i++) {
      if (i % 2 == 0) {
        this.blocks.push(...new Array(diskMap[i]).fill(Math.floor(i / 2)));
      } else {
        this.blocks.push(...new Array(diskMap[i]).fill(-1));
      }
    }
  }

  compactDisk() {
    let currLeftIdx = 0;
    let currRightIdx = this.blocks.length - 1;
    while (currLeftIdx < currRightIdx) {
      if (this.blocks[currLeftIdx] === -1) {
        // free space! move file blocks from the end here!
        if (this.blocks[currRightIdx] !== -1) {
          this.blocks[currLeftIdx] = this.blocks[currRightIdx];
          this.blocks[currRightIdx] = -1;
          currLeftIdx++;
        }
        currRightIdx--;
      } else {
        currLeftIdx++;
      }
    }
  }

  print() {
    console.log(
      this.blocks.map((num) => (num < 0 ? "." : num.toString())).join(""),
    );
  }
  getBlocks(): number[] {
    return this.blocks;
  }
}

export function sumPos(pos: number, len: number): number {
  // 0, 2 -> 0 + 1
  // 2, 3 -> 2 + 3 + 4
  // 10, 9 -> 10 + ... + 18
  return len * pos + (len * (len - 1)) / 2;
}

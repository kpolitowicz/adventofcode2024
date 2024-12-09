import { LinkedList } from "./linked";

export class Compacter {
  blocks: number[];
  linked = new LinkedList();

  constructor(diskMap: number[]) {
    this.blocks = [];
    for (let i = 0; i < diskMap.length; i++) {
      if (i % 2 == 0) {
        this.blocks.push(...new Array(diskMap[i]).fill(Math.floor(i / 2)));
        this.linked.append(Math.floor(i / 2), diskMap[i]);
      } else {
        this.blocks.push(...new Array(diskMap[i]).fill(-1));
        this.linked.append(-1, diskMap[i]);
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

  compactDiskWholeFiles() {
    let currRightIdx = this.blocks.length - 1;
    while (currRightIdx >= 0) {
      currRightIdx = this.moveNextFile(currRightIdx);
    }
  }

  moveNextFile(idx: number): number {
    const [fileStartIdx, fileSize] = this.findNextFile(idx);
    const freeStartIdx = this.findFreeSpace(fileSize, idx);

    if (freeStartIdx > -1) {
      for (let i = 0; i < fileSize; i++) {
        this.blocks[freeStartIdx + i] = this.blocks[fileStartIdx + i];
        this.blocks[fileStartIdx + i] = -1;
      }
    }

    return fileStartIdx - 1;
  }

  findNextFile(idx: number): [number, number] {
    let start = idx;
    let file = this.blocks[idx];
    let size = 0;
    while (start >= 0) {
      const thisBlock = this.blocks[start];
      if (thisBlock === file) {
        size++;
      } else {
        if (file !== -1) {
          start++;
          break;
        }
        file = thisBlock;
        size = 1;
      }
      start--;
    }
    return [start, size];
  }

  findFreeSpace(spaceSize: number, currRightIdx: number): number {
    let idx = 0;
    let startIdx = -1;
    let size = 0;
    while (idx < currRightIdx) {
      const thisBlock = this.blocks[idx];
      if (thisBlock === -1) {
        startIdx = startIdx === -1 ? idx : startIdx;
        size++;
      } else {
        if (size >= spaceSize) {
          break;
        } else {
          startIdx = -1;
          size = 0;
        }
      }
      idx++;
    }
    return startIdx;
  }

  countFreeSpace(pos: number): number {
    let cnt = 0;
    let i = pos;
    while (this.blocks[i] === -1) {
      i++;
      cnt++;
    }
    return cnt;
  }

  compactDiskWholeFiles2() {
    let currentFile = this.linked.getTail();
    while (currentFile) {
      const freeSpace = this.linked.findFreeSpace(currentFile);
      if (freeSpace) {
        // console.log(
        //   `Moving file ID: ${currentFile.fileId}@${currentFile.size} to the first space found, size: ${freeSpace.size}`,
        // );
        this.linked.moveFileToFreeSpace(currentFile, freeSpace);
      } else {
        // console.log(`No space for file ID: ${currentFile.fileId}`);
      }
      currentFile = this.linked.getNextFileFromRight(currentFile.fileId);
    }
  }

  print(sep = "") {
    console.log(
      this.blocks.map((num) => (num < 0 ? "." : num.toString())).join(sep),
    );
  }
  printLinked(sep = "") {
    console.log(
      this.getLinkedBlocks()
        .map((num) => (num < 0 ? "." : num.toString()))
        .join(sep),
    );
  }
  getBlocks(): number[] {
    return this.blocks;
  }
  getLinkedBlocks(): number[] {
    const res: number[] = [];
    this.linked.traverse().forEach((data) => {
      res.push(...new Array(data[1]).fill(data[0]));
    });
    return res;
  }
  public getLinked(): LinkedList {
    return this.linked;
  }
}

export function sumPos(pos: number, len: number): number {
  // 0, 2 -> 0 + 1
  // 2, 3 -> 2 + 3 + 4
  // 10, 9 -> 10 + ... + 18
  return len * pos + (len * (len - 1)) / 2;
}

type Pos = {
  r: number;
  c: number;
};

export class Grid {
  grid: string[][];
  currentPos: Pos;
  currentDir: Pos;

  constructor(lines: string[][]) {
    this.grid = lines;

    this.currentPos = { r: -1, c: -1 };
    for (let i = 0; i < this.height(); i++) {
      for (let j = 0; j < this.width(); j++) {
        if (this.at(i, j) == "^") {
          this.currentPos = { r: i, c: j };
          break;
        }
      }
    }

    this.currentDir = { r: -1, c: 0 };
  }

  simulateStepsUntilOut() {
    let step = 0;
    while (!this.isGuardOut() && step < 10000) {
      step++;
      this.stepUntilObstacleOrEdge();
      this.turnRight();
    }
  }

  countVisited(): number {
    let cnt = 0;
    for (let i = 0; i < this.height(); i++) {
      for (let j = 0; j < this.width(); j++) {
        if (this.at(i, j) == "X") {
          cnt += 1;
        }
      }
    }
    return cnt;
  }

  isGuardOut(): boolean {
    return (
      this.currentPos.r < 0 ||
      this.currentPos.r >= this.height() ||
      this.currentPos.c < 0 ||
      this.currentPos.c >= this.width()
    );
  }

  stepUntilObstacleOrEdge() {
    while (!this.isGuardOut() && !this.isObstacle()) {
      this.takeStep();
    }
  }

  isObstacle(): boolean {
    const nextPos = {
      r: this.currentPos.r + this.currentDir.r,
      c: this.currentPos.c + this.currentDir.c,
    };
    if (
      nextPos.r < 0 ||
      nextPos.r >= this.height() ||
      nextPos.c < 0 ||
      nextPos.c >= this.width()
    ) {
      return false;
    }
    return this.at(nextPos.r, nextPos.c) == "#";
  }

  takeStep() {
    this.grid[this.currentPos.r][this.currentPos.c] = "X";
    this.currentPos = {
      r: this.currentPos.r + this.currentDir.r,
      c: this.currentPos.c + this.currentDir.c,
    };
  }

  turnRight() {
    // -1, 0 -> 0, 1 -> 1, 0 -> 0, -1 -> ...
    if (this.currentDir.r === -1 && this.currentDir.c === 0) {
      this.currentDir = { r: 0, c: 1 };
    } else if (this.currentDir.r === 0 && this.currentDir.c === 1) {
      this.currentDir = { r: 1, c: 0 };
    } else if (this.currentDir.r === 1 && this.currentDir.c === 0) {
      this.currentDir = { r: 0, c: -1 };
    } else if (this.currentDir.r === 0 && this.currentDir.c === -1) {
      this.currentDir = { r: -1, c: 0 };
    }
  }

  height(): number {
    return this.grid.length;
  }
  width(): number {
    return this.grid[0].length;
  }
  at(x: number, y: number): string {
    return this.grid[x][y];
  }
  getGrid(): string[][] {
    return this.grid;
  }
  print() {
    const lines = this.grid.map((line) => line.join(""));
    console.log(lines.join("\n"));
  }
}

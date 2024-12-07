export class Equation {
  result: number;
  components: number[];

  constructor(numbers: number[]) {
    this.result = numbers[0];
    this.components = numbers.slice(1);
  }

  isWorking(): boolean {
    const permutations = this.opPermutations(this.components.length - 1);
    return permutations.some((perm) => {
      return this.calculate(this.components, perm) == this.result;
    });
  }

  isWorkingWithConcat(): boolean {
    const permutations = this.opPermutationsWithConcat(
      this.components.length - 1,
    );
    return permutations.some((perm) => {
      return this.calculate(this.components, perm) == this.result;
    });
  }

  opPermutations(l: number): string[][] {
    const perms: string[][] = [];
    for (let i = 0; i < 2 ** l; i++) {
      perms.push(
        i
          .toString(2)
          .padStart(l, "0")
          .split("")
          .map((sym) => (sym == "0" ? "+" : "*")),
      );
    }
    return perms;
  }

  opPermutationsWithConcat(l: number): string[][] {
    const perms: string[][] = [];
    for (let i = 0; i < 3 ** l; i++) {
      perms.push(
        i
          .toString(3)
          .padStart(l, "0")
          .split("")
          .map((sym) => (sym == "0" ? "+" : sym == "1" ? "*" : "||")),
      );
    }
    return perms;
  }

  calculate(numbers: number[], operators: string[]): number {
    let res = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      res = this.applyOp(operators[i - 1], res, numbers[i]);
    }

    return res;
  }

  applyOp(op: string, num1: number, num2: number): number {
    if (op == "+") {
      return num1 + num2;
    } else if (op == "*") {
      return num1 * num2;
    } else {
      return parseInt(`${num1}${num2}`) || 0;
    }
  }

  getResult(): number {
    return this.result;
  }
}

export class Equations {
  equations: Equation[];

  constructor(equations: number[][]) {
    this.equations = equations.map((eq) => new Equation(eq));
  }

  filterWorking(): Equation[] {
    return this.equations.filter((eq) => eq.isWorking());
  }

  filterWorkingWithConcat(): Equation[] {
    return this.equations.filter((eq) => eq.isWorkingWithConcat());
  }
}

type RuleSpec = number[];

export class PageOrderingRules {
  rules: Map<number, Set<number>>;

  constructor(rules: RuleSpec[]) {
    this.rules = new Map();

    rules.forEach((rule) => this.addRule(rule));
  }

  anyBroken(n: number, preceeding: number[]): boolean {
    const rule = this.rules.get(n);

    return preceeding.some((elem) => rule?.has(elem));
  }

  addRule([prec, succ]: RuleSpec) {
    const succSet = this.rules.get(prec) || new Set<number>();
    succSet.add(succ);
    this.rules.set(prec, succSet);
  }
}

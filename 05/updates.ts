import { PageOrderingRules } from "./page_ordering_rules";

type UpdateSpec = number[];

export class Updates {
  updates: UpdateSpec[];

  constructor(updates: UpdateSpec[]) {
    this.updates = updates;
  }

  onlyCorrect(rules: PageOrderingRules): UpdateSpec[] {
    return this.updates.filter((update) => this.isCorrect(update, rules));
  }

  fixIncorrect(rules: PageOrderingRules): UpdateSpec[] {
    return this.updates
      .filter((update) => !this.isCorrect(update, rules))
      .map((update) => this.fixUpdate(update, rules));
  }

  isCorrect(update: UpdateSpec, rules: PageOrderingRules): boolean {
    let res = true;

    for (let i = 1; i < update.length; i++) {
      if (rules.anyBroken(update[i], update.slice(0, i))) {
        res = false;
        break;
      }
    }

    return res;
  }

  fixUpdate(update: UpdateSpec, rules: PageOrderingRules): UpdateSpec {
    const fixed = update;
    let broken = true;

    while (broken) {
      broken = false;
      for (let i = 1; i < fixed.length; i++) {
        const current = fixed[i];
        if (rules.anyBroken(current, fixed.slice(0, i))) {
          // move the current number before the prev one and retry
          fixed.splice(i, 1);
          fixed.unshift(current);
          broken = true;
          break;
        }
      }
    }

    return update;
  }
}

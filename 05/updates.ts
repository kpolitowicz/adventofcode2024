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
}

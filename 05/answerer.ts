import { InputParser } from "./input_parser";
import { PageOrderingRules } from "./page_ordering_rules";
import { Updates } from "./updates";

export function firstAnswer(input: string): number {
  const [rules_list, updates_list] = new InputParser().parse(input);
  const updates = new Updates(updates_list);
  const rules = new PageOrderingRules(rules_list);
  return updates
    .onlyCorrect(rules)
    .map((update) => {
      return update[Math.floor(update.length / 2)];
    })
    .reduce((sum, mid) => sum + mid, 0);
}

export function secondAnswer(input: string): number {
  return 0;
}

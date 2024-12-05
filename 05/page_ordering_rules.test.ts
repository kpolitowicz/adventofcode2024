import { PageOrderingRules } from "./page_ordering_rules";

describe("PageOrderingRules.anyBroken()", () => {
  it("reports if a page breaks the ordering rules", () => {
    const rules = new PageOrderingRules([
      [47, 53],
      [97, 13],
      [97, 61],
      [97, 47],
      [75, 29],
      [61, 13],
      [75, 53],
      [29, 13],
      [97, 29],
      [53, 29],
      [61, 53],
      [97, 53],
      [61, 29],
      [47, 13],
      [75, 47],
      [97, 75],
      [47, 61],
      [75, 61],
      [47, 29],
      [75, 13],
      [53, 13],
    ]);

    expect(rules.anyBroken(29, [75, 47, 61, 53])).toBe(false);
    expect(rules.anyBroken(97, [75])).toBe(true);
  });
});

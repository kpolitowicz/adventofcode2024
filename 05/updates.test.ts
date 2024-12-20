import { PageOrderingRules } from "./page_ordering_rules";
import { Updates } from "./updates";

describe("Updates.onlyCorrect()", () => {
  it("lists only updates that are correct by the rules", () => {
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
    const updates = new Updates([
      [75, 47, 61, 53, 29],
      [97, 61, 53, 29, 13],
      [75, 29, 13],
      [75, 97, 47, 61, 53],
      [61, 13, 29],
      [97, 13, 75, 29, 47],
    ]);

    expect(updates.onlyCorrect(rules)).toEqual([
      [75, 47, 61, 53, 29],
      [97, 61, 53, 29, 13],
      [75, 29, 13],
    ]);
  });
});

describe("Updates.fixIncorrect()", () => {
  it("finds and fixes updates that are incorrect by the rules", () => {
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
    const updates = new Updates([
      [75, 47, 61, 53, 29],
      [97, 61, 53, 29, 13],
      [75, 29, 13],
      [75, 97, 47, 61, 53],
      [61, 13, 29],
      [97, 13, 75, 29, 47],
    ]);

    expect(updates.fixIncorrect(rules)).toEqual([
      [97, 75, 47, 61, 53],
      [61, 29, 13],
      [97, 75, 47, 29, 13],
    ]);
  });
});

describe("Updates.fixUpdate()", () => {
  it("fixes an update to be correct by the rules", () => {
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
    const updates = new Updates([
      [75, 47, 61, 53, 29],
      [97, 61, 53, 29, 13],
      [75, 29, 13],
      [75, 97, 47, 61, 53],
      [61, 13, 29],
      [97, 13, 75, 29, 47],
    ]);

    expect(updates.fixUpdate([75, 97, 47, 61, 53], rules)).toEqual([
      97, 75, 47, 61, 53,
    ]);
    expect(updates.fixUpdate([61, 13, 29], rules)).toEqual([61, 29, 13]);
    expect(updates.fixUpdate([97, 13, 75, 29, 47], rules)).toEqual([
      97, 75, 47, 29, 13,
    ]);
  });
});

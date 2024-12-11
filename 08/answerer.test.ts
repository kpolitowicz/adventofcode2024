import { firstAnswer, secondAnswer } from "./answerer";

describe("Answer 1", () => {
  it("matches the example answer", () => {
    const input = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............
`;

    const actual = firstAnswer(input);
    expect(actual).toBe(14);
  });
});

describe("Answer 2", () => {
  it("matches the example answer", () => {
    const input = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............
`;

    const actual = secondAnswer(input);
    expect(actual).toBe(34);
  });
});
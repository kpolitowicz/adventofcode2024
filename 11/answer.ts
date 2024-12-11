import * as yargs from "yargs";

const args = yargs
  .option("input", {
    alias: "i",
    description: "Input file",
    default: `${__dirname}/input.txt`,
    demand: true,
  })
  .option("part", {
    alias: "p",
    description: "Answer part (1 or 2)",
    demand: true,
  }).argv as { input: string; part: string };

import fs from "fs";
const input = fs.readFileSync(`${args.input}`, "utf8");

import { firstAnswer, secondAnswer } from "./answerer";
if (args.part == "1") {
  console.log(firstAnswer(input));
} else {
  console.log(secondAnswer(input));
}

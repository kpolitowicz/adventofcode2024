import * as yargs from "yargs";

const args = yargs
  .option("input", {
    alias: "i",
    description: "Input file",
    demand: true,
  })
  .option("part", {
    alias: "p",
    description: "Answer part (1 or 2)",
    demand: true,
  }).argv;

import fs from "fs";
const input = fs.readFileSync(`./${args.input}`, "utf8");

import { firstAnswer, secondAnswer } from "./answerer";
if (args.part == "1") {
  console.log(firstAnswer(input));
} else {
  console.log(secondAnswer(input));
}

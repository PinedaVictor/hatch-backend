import { promise, generatePromises } from "../utils/Fetch.js";
import Promise from "node-fetch";

test("test promise", () => {
  expect(promise("", "")).toStrictEqual(new Promise());
});

test("test promise generation", () => {
  expect(generatePromises(["tech", "health"])).toStrictEqual([
    new Promise(),
    new Promise(),
  ]);
});

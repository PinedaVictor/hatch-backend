import { promise } from "../utils/Fetch.js";
import fetch from "node-fetch";
import Promise from "node-fetch";
import { jest } from "@jest/globals";

test("test promise", () => {
  expect(promise("", "")).toStrictEqual(new Promise());
});

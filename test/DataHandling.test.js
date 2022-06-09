import {
  decomposeData,
  parseStringObjs,
  generateUniqueSet,
} from "../utils/DataHandling.js";

// data: [ {arrName:[]}, ... ] => []
// test("decompose object array to to matrix", () => {
//   expect(decomposeData([{ name: [] }])).toBe([[]]);
// });

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

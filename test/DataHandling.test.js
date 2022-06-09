import {
  decomposeData,
  parseStringObjs,
  generateUniqueObjArray,
} from "../utils/DataHandling.js";

// data: [ {arrName:[]}, ... ] => [[]]
test("decompose object array to array matrix", () => {
  const test1 = [{ users: ["Jill", "Eric", "Magie"] }];
  const sol1 = [["Jill", "Eric", "Magie"]];

  const test2 = [
    { users: ["Jill", "Eric", "Magie"] },
    { users: ["Tom", "Zed", "Sarah"] },
    { users: ["Tim", "DJ", "JR"] },
  ];
  const sol2 = [
    ["Jill", "Eric", "Magie"],
    ["Tom", "Zed", "Sarah"],
    ["Tim", "DJ", "JR"],
  ];
  expect(decomposeData(test1, "users")).toStrictEqual(sol1);
  expect(decomposeData(test2, "users")).toStrictEqual(sol2);
});

// [[{},{}],[{},{}],...]
test("unique array of objects", () => {
  const test1 = [[{ name: "Joll", age: 23 }], [{ name: "Joll", age: 23 }]];
  const sol1 = [{ name: "Joll", age: 23 }];
  const test2 = [
    [{ name: "Joll", age: 23 }],
    [{ name: "Joll", age: 23 }],
    [{ name: "Joll", age: 33 }],
  ];
  const sol2 = [
    { name: "Joll", age: 23 },
    { name: "Joll", age: 33 },
  ];
  const test3 = [
    [{ name: "Jill", age: 23 }],
    [{ name: "Joll", age: 23 }],
    [{ name: "Joll", age: 33 }],
  ];
  const sol3 = [
    { name: "Jill", age: 23 },
    { name: "Joll", age: 23 },
    { name: "Joll", age: 33 },
  ];
  expect(generateUniqueObjArray(test1)).toStrictEqual(sol1);
  expect(generateUniqueObjArray(test2)).toStrictEqual(sol2);
  expect(generateUniqueObjArray(test3)).toStrictEqual(sol3);
});

test("parse string objects to objects", () => {
  const test1 = [
    JSON.stringify({ name: "Jill", age: 28 }),
    JSON.stringify({ name: "Jill", age: 28 }),
  ];
  const sol1 = [
    { name: "Jill", age: 28 },
    { name: "Jill", age: 28 },
  ];
  expect(parseStringObjs(test1)).toStrictEqual(sol1);
});

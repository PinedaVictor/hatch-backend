import { hashByProperty } from "../utils/Sort.js";

const objs = [
  { id: 1, name: "Jack", age: 23 },
  { id: 12, name: "Jill", age: 21 },
  { id: 32, name: "Conner", age: 33 },
  { id: 16, name: "Sara", age: 45 },
];

const hashByID = new Map([
  [objs[0]["id"], objs[0]],
  [objs[1]["id"], objs[1]],
  [objs[2]["id"], objs[2]],
  [objs[3]["id"], objs[3]],
]);

test("test hash by property", () => {
  expect(hashByProperty(objs)).toStrictEqual(hashByID);
});

import { hashByProperty, sort, sortAsc } from "../utils/Sort.js";

const objs = [
  { id: 1, name: "Jack", age: 23 },
  { id: 12, name: "Jill", age: 21 },
  { id: 32, name: "Conner", age: 33 },
  { id: 16, name: "Sara", age: 45 },
];

test("test hash by property function", () => {
  const hashedByID = new Map([
    [objs[0]["id"], objs[0]],
    [objs[1]["id"], objs[1]],
    [objs[2]["id"], objs[2]],
    [objs[3]["id"], objs[3]],
  ]);
  const hashedByName = new Map([
    [objs[0]["name"], objs[0]],
    [objs[1]["name"], objs[1]],
    [objs[2]["name"], objs[2]],
    [objs[3]["name"], objs[3]],
  ]);
  expect(hashByProperty(objs, "id")).toStrictEqual(hashedByID);
  expect(hashByProperty(objs, "name")).toStrictEqual(hashedByName);
});

const postObjs = [
  {
    posts: objs,
  },
];

test("test sort function", () => {
  const sortedByID = [
    { ...objs[0] },
    { ...objs[1] },
    { ...objs[3] },
    { ...objs[2] },
  ];

  const checkDirection = [
    { ...objs[2] },
    { ...objs[3] },
    { ...objs[1] },
    { ...objs[0] },
  ];

  expect(sort(postObjs, "id", "asc")).toStrictEqual(sortedByID);
  expect(sort(postObjs, "id", "desc")).toStrictEqual(checkDirection);
});

test("sorting asc", () => {
  const test1 = [22, 1, 0, 9, 30, 23, 4, 5, 6, 7];
  const sol1 = [0, 1, 4, 5, 6, 7, 9, 22, 23, 30];
  expect(sortAsc(test1)).toStrictEqual(sol1);
});

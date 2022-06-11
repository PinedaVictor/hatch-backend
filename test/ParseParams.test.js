import { defualts, parseParameters } from "../utils/ParseParams.js";

const onlyTags = { tags: "tech,health" };
const parsedTags = { tags: ["tech", "health"] };
const tagsSortBy = { ...onlyTags, sortBy: "likes" };
const tagsSortByDirection = { ...tagsSortBy, direction: "desc" };
const tagsDirection = { ...onlyTags, direction: "desc" };

test("test query parameter parsing", () => {
  const solOnlyTags = { ...parsedTags, ...defualts };
  const solTagsSortBy = {
    ...parsedTags,
    sortBy: tagsSortBy["sortBy"],
    direction: defualts["direction"],
  };
  const solTagsSortByDirection = {
    ...parsedTags,
    sortBy: "likes",
    direction: "desc",
  };
  const solTagsDirection = { ...parsedTags, sortBy: "id", direction: "desc" };
  expect(parseParameters(onlyTags)).toStrictEqual(solOnlyTags);
  expect(parseParameters(tagsSortBy)).toStrictEqual(solTagsSortBy);
  expect(parseParameters(tagsSortByDirection)).toStrictEqual(
    solTagsSortByDirection
  );
  expect(parseParameters(tagsDirection)).toStrictEqual(solTagsDirection);
});

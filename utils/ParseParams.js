// URL parameter defualts
const defualts = { sortBy: "id", direction: "asc" };
export const parseParameters = (inputParams) => {
  const tags = inputParams["tags"].split(",");
  let query = {};
  if (inputParams["sortBy"] && inputParams["direction"]) {
    query = {
      tags: tags,
      sortBy: inputParams["sortBy"],
      direction: inputParams["direction"],
    };
    return query;
  } else if (inputParams["sortBy"]) {
    query = {
      tags: tags,
      sortBy: inputParams["sortBy"],
      direction: defualts["direction"],
    };
    return query;
  } else if (inputParams["direction"]) {
    query = {
      tags: tags,
      sortBy: defualts["sortBy"],
      direction: inputParams["direction"],
    };

    return query;
  } else {
    query = { tags: tags, ...defualts };
    return query;
  }
};

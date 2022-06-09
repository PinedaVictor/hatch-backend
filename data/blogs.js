import { parseParameters, generatePromises, sort } from "../utils/index.js";

export const getPostsData = async (parameters) => {
  const searchCriteria = parseParameters(parameters);
  const tags = searchCriteria["tags"];
  const sortBy = searchCriteria["sortBy"];
  const direction = searchCriteria["direction"];
  try {
    const batchPromises = generatePromises(tags);
    const resolvePromises = await Promise.all(batchPromises);
    const data = sort(resolvePromises, sortBy, direction);
    return data;
  } catch (error) {
    console.log("ERROR:", error);
  }
};

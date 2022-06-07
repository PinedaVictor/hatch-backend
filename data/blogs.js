import { parseParameters, generatePromises, sort } from "../utils/index.js";

export const getPostsData = async (parameters) => {
  const searchCriteria = parseParameters(parameters);
  const tags = searchCriteria["tags"];
  console.log("search with:", searchCriteria);
  try {
    const batchPromises = generatePromises(tags);
    const resolvePromises = await Promise.all(batchPromises);
    // const fetchPromises = await Promise.allSettled(batchResponses);
    // TODO: We must pass in search criteria
    sort(resolvePromises);

    // return data.json();
  } catch (error) {
    console.log("ERROR:", error);
  }
};

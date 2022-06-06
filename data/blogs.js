import { parseParameters } from "../utils/ParseParams.js";
import { generatePromises } from "../utils/Fetch.js";

export const getPostsData = async (parameters) => {
  const searchCriteria = parseParameters(parameters);
  const tags = searchCriteria["tags"];
  console.log("search with:", searchCriteria);
  try {
    //   Need a butch of these fetch requests
    //   each request will have a param of tag
    //   https://api.hatchways.io/assessment/blog/posts?tag={param}

    const batchPromises = generatePromises(tags);
    const resolvePromises = await Promise.all(batchPromises);
    // const fetchPromises = await Promise.allSettled(batchResponses);

    console.log(resolvePromises);
    // const postData = resolvePromises.map((item) => {
    //   return item;
    // });

    // console.log("postData :", postData);

    // return data.json();
  } catch (error) {
    console.log("ERROR:", error);
  }
};

import { parseParameters } from "../utils/ParseParams.js";
import { generateResponses } from "../utils/Fetch.js";

const sep = (input = []) => {
  const postData = input.map(async (res) => {
    const postResponse = res.value;
    const data = postResponse.json();
    console.log("Printing before");
    if (data) {
      console.log("Printing before");
      // data.then((dataItem) => {
      //   console.log("THE DATA ITEM");
      // });
    } else {
      console.log("NO data");
    }
    // data.then((item) => {
    //   console.log("THE ITEM", item);
    // });
  });
  // return postData;
};

export const getPostsData = async (parameters) => {
  const searchCriteria = parseParameters(parameters);
  const tags = searchCriteria["tags"];
  console.log("search with:", searchCriteria);
  try {
    //   Need a butch of these fetch requests
    //   each request will have a param of tag
    //   https://api.hatchways.io/assessment/blog/posts?tag={param}

    const batchResponses = generateResponses(tags);
    // const fetchPromises = await Promise.all(batchResponses);
    const fetchPromises = await Promise.allSettled(batchResponses);

    const postData = sep(fetchPromises);
    // const d = postData.forEach((item) => {
    //   console.log();
    // });
    // const postData = fetchPromises.map(async (res) => {
    //   const postResponse = await res.value;
    //   console.log(postResponse);
    //   // const postData = await postResponse.json();
    //   // // console.log("In map fuction", postData);
    //   // if (postData) {
    //   //   return postData;
    //   // }
    // });
    console.log("postData :", postData);

    // console.log(data);

    // console.log("the i:");

    // console.log(data);
    // data.then((item) => {
    //   console.log(item);
    // });

    // const getData = fetch(hatchwaysPostsAPI, {
    //   method: "get",
    //   mode: "cors",
    // });

    // const data = await getData;
    // console.log(data);

    // data.json().then((item) => {
    //   console.log("the data");
    //   console.log(item);
    // });

    // return data.json();
  } catch (error) {
    console.log("ERROR:", error);
  }
};

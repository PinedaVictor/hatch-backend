import fetch from "node-fetch";
import { parseParameters } from "../utils/ParseParams.js";

const hatchwaysPostsAPI =
  "https://api.hatchways.io/assessment/blog/posts?tag=tech";

const API = "https://api.hatchways.io/assessment/blog/posts?tag=";

export const getPostsData = async (parameters) => {
  const searchCriteria = parseParameters(parameters);
  const tags = searchCriteria["tags"];
  console.log("search with:", searchCriteria);
  try {
    //   Need a butch of these fetch requests
    //   each request will have a param of tag
    //   https://api.hatchways.io/assessment/blog/posts?tag={param}
    // console.log("bf:::::", batchFetch);

    const batchFetch = tags.map((item) => {
      return fetch(`${API}${item}`, { method: "get", mode: "cors" });
    });

    const fetchPromises = await Promise.all(batchFetch);
    fetchPromises.map(async (res) => {
      const postResponse = await res;
      const postData = postResponse.json();
      postData.then((item) => {
        console.log(item);
      });
    });

    // console.log("the data:", data);
    // console.log(data);
    // data.then((res) => {
    //   console.log(res);
    // });

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

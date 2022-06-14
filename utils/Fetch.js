import fetch from "node-fetch";
const apiEndpoint = "https://api.hatchways.io/assessment/blog/posts?tag=";

const promise = (api, queryParam) => {
  return new Promise(async (resolve, reject) => {
    try {
      const serverResponse = await fetch(`${api}${queryParam}`, {
        method: "get",
        mode: "cors",
      });
      serverResponse.json().then((data) => {
        resolve(data);
      });
    } catch (error) {
      reject("Error while generating Promise");
      throw new Error(error);
    }
  });
};

const generatePromises = (tags = []) => {
  return tags.map((tag) => {
    return promise(apiEndpoint, tag);
  });
};

export { generatePromises, promise };

import fetch from "node-fetch";
const apiEndpoint = "https://api.hatchways.io/assessment/blog/posts?tag=";

const response = (api, queryParam) => {
  return fetch(`${api}${queryParam}`, { method: "get", mode: "cors" });
};

// const response = (api, queryParam) => {
//   return new Promise((resolve, reject) => {
//     if (queryParam) {
//       resolve(fetch(`${api}${queryParam}`, { method: "get", mode: "cors" }));
//     } else {
//       reject("Error while generating Promise");
//     }
//   });
// };

const generateResponses = (tags = []) => {
  return tags.map((tag) => {
    return response(apiEndpoint, tag);
  });
};

const fetchPostdata = (promises) => {
  return promises.map(async (res) => {
    const postResponse = await res.value;
    const data = postResponse.json();
    data.then((postData) => {
      //   console.log(postData);
      return postData;
    });
  });
  //   return n;
  //   console.log(n);
};

// fetchPromises.map(async (res) => {
//   const postResponse = await res.value;
//   const postData = postResponse.json();
//   postData.then((item) => {
//     console.log(item);
//   });
// });

export { generateResponses, fetchPostdata };

import { removeDublicates, decomposeData } from "./index.js";

const hashByProperty = (data = [], property = "") => {
  const dataMap = new Map();
  for (let i = 0; i < data.length; i++) {
    dataMap.set(data[i][property], data[i]);
  }
  return dataMap;
};

export const sort = (dataInput = {}, sortBy = "id", direction = "asc") => {
  const defualtDirection = direction === "asc" ? true : false;
  const rawData = decomposeData(dataInput, "posts");
  const dataSet = removeDublicates(rawData);
  const data = [...dataSet];
  // TODO: pass in sortBy prop
  const dataMap = hashByProperty(data, "reads");

  const keys = [...dataMap.keys()];
  const sortKeys = keys.sort((a, b) => {
    return a - b;
  });

  console.log(sortKeys);
  const sortedData = sortKeys.map((key) => {
    return dataMap.get(key);
  });

  console.log(defualtDirection);
  // TODO: pass in sortBy and direction
  // return direction ? [] : [].reverse();
  // const s = [...dataInput];
  // console.log("s:", s);
  // alg:
  // 1. Decompose data
  // 2. sort based on
  // id (defualt), likes, poplularity
  // asc or desc order => always sort in asc and reverse if dir = desc
  // const data = direction ? nums : nums.reverse()
};

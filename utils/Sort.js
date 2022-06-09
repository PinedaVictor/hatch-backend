import { generateUniqueSet, decomposeData } from "./index.js";

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
  const dataSet = generateUniqueSet(rawData);
  const data = [...dataSet];
  const dataMap = hashByProperty(data, sortBy);
  const keys = [...dataMap.keys()];
  const sortKeys = keys.sort((a, b) => {
    return a - b;
  });

  const sortedData = sortKeys.map((key) => {
    return dataMap.get(key);
  });

  return defualtDirection ? sortedData : sortedData.reverse();
};

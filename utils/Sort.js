import { generateUniqueObjArray, decomposeData } from "./index.js";

export const hashByProperty = (data = [], property = "") => {
  const dataMap = new Map();
  for (let i = 0; i < data.length; i++) {
    dataMap.set(data[i][property], data[i]);
  }
  return dataMap;
};

export const sortAsc = (input = []) => {
  return input.sort((a, b) => {
    return a - b;
  });
};

export const sort = (dataInput = {}, sortBy = "id", direction = "asc") => {
  const defualtDirection = direction === "asc" ? true : false;
  const rawData = decomposeData(dataInput, "posts");
  const data = generateUniqueObjArray(rawData);
  const dataMap = hashByProperty(data, sortBy);
  const keys = [...dataMap.keys()];
  const sortKeys = sortAsc(keys);

  const sortedData = sortKeys.map((key) => {
    return dataMap.get(key);
  });

  return defualtDirection ? sortedData : sortedData.reverse();
};

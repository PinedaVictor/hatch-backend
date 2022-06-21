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

const mapKeyToData = (keys = [], dataMap = new Map()) => {
  return keys.map((key) => {
    return dataMap.get(key);
  });
};

export const sort = (dataInput = {}, sortBy = "id", direction = "asc") => {
  const rawData = decomposeData(dataInput, "posts");
  const data = generateUniqueObjArray(rawData);
  const dataMap = hashByProperty(data, sortBy);
  const keys = [...dataMap.keys()];
  const sortKeys = sortAsc(keys);
  const sortedData = mapKeyToData(sortKeys, dataMap);
  return direction === "asc" ? sortedData : sortedData.reverse();
};

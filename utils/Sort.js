const parseStringObjs = (inputSet = new Set()) => {
  const dataSet = new Set();
  inputSet.forEach((data) => {
    const dataObj = JSON.parse(data);
    dataSet.add(dataObj);
  });
  return dataSet;
};

// data: [[],[], ...]
const removeDublicates = (data = []) => {
  const uniquedata = new Set();
  data.map((data) => {
    data.map((dataObj) => {
      const item = JSON.stringify(dataObj);
      uniquedata.add(item);
    });
  });

  const parsedData = parseStringObjs(uniquedata);
  return parsedData;
};

// data: [ {arrName:[]}, ... ]
const decomposeData = (data = {}, arrName) => {
  return data.map((dataItem) => {
    return dataItem[arrName];
  });
};

const hashByProperty = (data = [], property = "") => {
  const dataMap = new Map();
  for (let i = 0; i < data.length; i++) {
    dataMap.set(data[i][property], data[i]);
  }
  return dataMap;
};

export const sort = (dataInput = {}, sortBy, direction) => {
  const rawData = decomposeData(dataInput, "posts");
  const dataSet = removeDublicates(rawData);
  const data = [...dataSet];
  const dataMap = hashByProperty(data, "id");

  const keys = [...dataMap.keys()];

  console.log("the keys:", keys);
  const nums = data.map((user) => {
    return user["id"];
  });

  const sorted = nums.sort((a, b) => {
    return a - b;
  });

  // const s = [...dataInput];
  // console.log("s:", s);
  // alg:
  // 1. Decompose data
  // 2. sort based on
  // id (defualt), likes, poplularity
  // asc or desc order => always sort in asc and reverse if dir = desc
  // const data = direction ? nums : nums.reverse()
};

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

export { parseStringObjs, removeDublicates, decomposeData };

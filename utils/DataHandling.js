const parseStringObjs = (inputSet = new Set()) => {
  const dataParsed = [];
  inputSet.forEach((data) => {
    const dataObj = JSON.parse(data);
    dataParsed.push(dataObj);
  });
  return dataParsed;
};

// data: [[],[], ...]
const generateUniqueObjArray = (data = []) => {
  const uniquedata = new Set();
  data.map((dataItem) => {
    dataItem.map((dataObj) => {
      const item = JSON.stringify(dataObj);
      uniquedata.add(item);
    });
  });

  const parsedData = parseStringObjs(uniquedata);
  return parsedData;
};

// data: [ {arrName:[]}, ... ]
const decomposeData = (data = [], arrName) => {
  return data.map((dataItem) => {
    return dataItem[arrName];
  });
};

export { parseStringObjs, generateUniqueObjArray, decomposeData };

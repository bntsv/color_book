// convert data to map
export const getDataAsMap = (data) => {
  return new Map(JSON.parse(data));
};

// convert map to array;
export const mapToArray = (map) => {
  return Array.from(map.values());
};

// get data as json string
export const getDataAsJSONString = (data) => {
  const dataAsMap = getDataAsMap(data);
  const dataAsObject = Object.fromEntries(dataAsMap.entries());

  return data ? JSON.stringify(dataAsObject, null, '\n') : null;
};

// notify change
export const announceChange = (msg) => {
  const event = new Event(msg);

  document.dispatchEvent(event);

  console.log(msg);
};

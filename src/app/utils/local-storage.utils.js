import { getDataAsMap } from './utils.js';

// data from the table is kept in localStorage.
// A custom event is fired when the data updates so that the table knows it needs to reload as well

// get from local storage
export const getLocalStorageData = (key) => {
  return localStorage.getItem(key);
};

// add to local storage
export const addToCache = (key, value) => {
  const data = getLocalStorageData(key);
  let cache;

  if (!data) {
    cache = new Map();
    cache.set(value.id, value);
  } else {
    cache = getDataAsMap(data);
    cache.set(value.id, value);
  }

  const cacheStr = JSON.stringify(Object.fromEntries(cache.entries()));
  localStorage.setItem(key, cacheStr);

  return {
    data: cache,
    action: 'add'
  };
};

// delete from local storage
export const deleteFromCache = (key, itemID) => {
  const data = getLocalStorageData(key);

  if (!data) return;

  const cache = getDataAsMap(data);
  cache.delete(itemID);

  if (Array.from(cache.entries()).length === 0) {
    localStorage.removeItem(key);

    return;
  }

  const cacheStr = JSON.stringify(Object.fromEntries(cache.entries()));
  localStorage.setItem(key, cacheStr);

  return {
    data: cache,
    action: 'delete'
  };
};

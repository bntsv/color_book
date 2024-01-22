// get from local storage
export const getLocalStorageData = (key) => {
  return localStorage.getItem(key);
};

// add to local storage
export const addToCache = (key, value) => {
  const data = localStorage.getItem(key);
  let cache;

  if (!data) {
    cache = new Map();
    cache.set(value.id, value);
  } else {
    cache = new Map(JSON.parse(data));
    cache.set(value.id, value);
  }

  const cacheStr = JSON.stringify(Array.from(cache.entries()));
  localStorage.setItem(key, cacheStr);

  return {
    data: cache,
    action: 'add'
  };
};

// delete from local storage
export const deleteFromCache = (key, itemID) => {
  const data = localStorage.getItem(key);

  if (!data) return;

  const cache = new Map(JSON.parse(data));
  cache.delete(itemID);

  const entriesArr = Array.from(cache.entries());

  if (entriesArr.length === 0) {
    localStorage.removeItem(key);

    return;
  }

  const cacheStr = JSON.stringify(entriesArr);
  localStorage.setItem(key, cacheStr);

  return {
    data: cache,
    action: 'delete'
  };
};

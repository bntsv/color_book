import { toggleTableEmptyState, updateTable } from '../table/table.js';
// import { stringifyMap, parseMap } from '../utils.js';

const formElem = document.querySelector('form');

// extract and format the table data from the form data
const getRowData = (formData) => {
  const na = 'N/A';
  const phone = formData.get('contactByPhone');
  const email = formData.get('contactByMail');
  const SMS = formData.get('contactBySMS');
  const prefContact = [phone, email, SMS].filter(Boolean).join(`, `);

  return {
    id: crypto.randomUUID(),
    name: formData.get('name') || na,
    surname: formData.get('surname') || na,
    email: formData.get('email') || na,
    age: formData.get('age') || na,
    color: formData.get('color') || na,
    prefContact: prefContact.length !== 0 ? prefContact : na
  };
};

// add to session storage and return the table data
const updateCache = (key, value) => {
  //   if (!existingTableData) {
  //     const tableData = {};
  //     tableData[value.id] = value;
  //     window.sessionStorage.set(key, tableData);
  //   } else {
  //     existingTableData[value.id] = value;
  //   }

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

  return cache;
};

formElem.addEventListener('submit', (e) => {
  // prevent page re-rendering
  e.preventDefault();

  // create the data object
  const tableRowData = getRowData(new FormData(formElem));

  // update the table
  updateTable(tableRowData);

  // update cache
  updateCache('tableData', tableRowData);

  // show table if this is the first added contact and hide empty state
  const table = document.querySelector('table');
  if (table.classList.contains('hidden')) {
    table.classList.toggle('hidden');
    toggleTableEmptyState();
  }

  // reset form
  formElem.reset();
});

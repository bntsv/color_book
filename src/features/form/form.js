import { addToCache } from '../local-storage.utils.js';
import { announceChange } from '../utils.js';

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

formElem.addEventListener('submit', (e) => {
  // prevent page re-rendering
  e.preventDefault();

  // create the data object
  const tableRowData = getRowData(new FormData(formElem));

  // update cache
  addToCache('tableData', tableRowData);

  // notify change
  announceChange('storeUpdate');

  // reset form
  formElem.reset();
});

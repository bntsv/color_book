import './form/form-validations.js';
import './form/form.js';
import { fillTable, toggleTableEmptyState, toggleTableFullState } from './table/table.js';

addEventListener('DOMContentLoaded', (event) => {
  const data = localStorage.getItem('tableData');

  console.log(data);

  if (data) {
    const tableData = new Map(JSON.parse(data));

    fillTable(Array.from(tableData.values()));
    toggleTableFullState();
    toggleTableEmptyState();
  }
});

// add new row to table
// const generateTable = (data) => {
//   const { name, surname, email, age, color, prefContact } = data;

//   const tbodyEl = document.querySelector('tbody');
//   const newRowEl = document.createElement('tr');
//   const rowContent = `
//     <td>${name}</td>
//     <td>${surname}</td>
//     <td>${email}</td>
//     <td>${age}</td>
//     <td>${color}</td>
//     <td>${prefContact}</td>
//   `;

//   newRowEl.innerHTML = rowContent;
//   tbodyEl.appendChild(newRowEl);
// };

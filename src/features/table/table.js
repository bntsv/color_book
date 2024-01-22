import { deleteFromCache } from '../local-storage.utils.js';
import { openDeleteModal, openPrintModal } from '../modal/modal.js';
import { announceChange } from '../utils.js';

export const deleteTR = (trID) => {
  deleteFromCache('tableData', trID);

  announceChange('storeUpdate');
};

const attachDeleteHandlers = () => {
  const deleteButtons = document.querySelectorAll('.fa-trash');

  deleteButtons.forEach((btn) => {
    btn.onclick = () => {
      openDeleteModal(btn.id);
    };
  });
};

const attachPrintHandler = () => {
  const printButton = document.querySelector('.print-button');

  printButton.onclick = () => {
    openPrintModal();
  };
};

const generateTRContent = (trData) => {
  const { id, name, surname, email, age, color, prefContact } = trData;

  return `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td><div style="background-color:${color}; width: 1em; height: 1em; border-radius: 50%; margin: 0 auto"></div></td>
        <td>${prefContact} <i class="fa-solid fa-trash" id=${id}></i></td>
      `;
};

const generateTBody = (tableData) => {
  return tableData.reduce((tbodyContent, trData) => {
    const tr = generateTRContent(trData);
    tbodyContent += `<tr>${tr}</tr>`;

    return tbodyContent;
  }, '');
};

export const fillTable = (tableData) => {
  const table = document.querySelector('table');

  const oldTableBodyEl = document.querySelector('tbody');

  const newTableBodyEl = document.createElement('tbody');
  newTableBodyEl.innerHTML = generateTBody(tableData);

  if (oldTableBodyEl) {
    table.replaceChild(newTableBodyEl, oldTableBodyEl);
    attachDeleteHandlers();

    return;
  }

  table.appendChild(newTableBodyEl);
  attachDeleteHandlers();
};

export const showTable = () => {
  const table = document.querySelector('table');
  const printBtnWrap = document.querySelector('.print-button-wrap');
  const tableEmptyState = document.querySelector('.table-empty-state');

  table.classList.remove('hidden');
  printBtnWrap.classList.remove('hidden');
  tableEmptyState.classList.add('hidden');
};

export const hideTable = () => {
  const table = document.querySelector('table');
  const printBtnWrap = document.querySelector('.print-button-wrap');
  const tableEmptyState = document.querySelector('.table-empty-state');

  table.classList.add('hidden');
  printBtnWrap.classList.add('hidden');
  tableEmptyState.classList.remove('hidden');
};

export const renderTable = (tableData) => {
  fillTable(tableData);
  attachPrintHandler();
  showTable();
};

import { getLocalStorageData } from '../local-storage.utils.js';
import { deleteTR } from '../table/table.js';
import { getDataAsJSONString } from '../utils.js';

const modalDelete = document.querySelector('.delete-modal-wrap');
const modalPrint = document.querySelector('.print-modal-wrap');

const modalXButton = document.querySelectorAll('.modal-x-button');
const modalCancelButton = document.querySelector('.modal-cancel-button');
const modalDeleteButton = document.querySelector('.modal-delete-button');

export const openDeleteModal = (trID) => {
  modalDelete.classList.add('open-modal');

  modalDeleteButton.onclick = () => {
    deleteTR(trID);
    closeModal();
  };
};

export const openPrintModal = () => {
  const JSONStr = getDataAsJSONString(getLocalStorageData('tableData'));

  const printModalInfo = document.querySelector('.print-modal-info');
  printModalInfo.innerHTML = `<p>${JSONStr}</p>`;

  modalPrint.classList.add('open-modal');
};

const closeModal = () => {
  modalDelete.classList.remove('open-modal');
  modalPrint.classList.remove('open-modal');
};

[...modalXButton, modalCancelButton].forEach((btn) => {
  btn.onclick = closeModal;
});

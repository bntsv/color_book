import './features/form/form.js';
import './features/form/form-validations.js';
import { getLocalStorageData } from './utils/local-storage.utils.js';
import { getDataAsMap, mapToArray } from './utils/utils.js';
import { hideTable, renderTable } from './features/table/table.js';

// TODO: document functions

const loadTableData = () => {
  const data = getLocalStorageData('tableData');

  if (data) {
    const tableDataArray = mapToArray(getDataAsMap(data));

    renderTable(tableDataArray);

    return;
  }

  hideTable();
};

addEventListener('DOMContentLoaded', loadTableData);
document.addEventListener('storeUpdate', loadTableData, false);

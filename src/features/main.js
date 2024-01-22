import './form/form.js';
import './form/form-validations.js';
import { getLocalStorageData } from './local-storage.utils.js';
import { getDataAsMap, mapToArray } from './utils.js';
import { hideTable, renderTable } from './table/table.js';

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

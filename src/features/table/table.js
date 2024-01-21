// const createTable = () => {
//   const table = document.createElement('table');

//   const tableContent = `
//       <table cellpadding="10">
//           <thead>
//               <tr>
//                   <th scope="col">Name</th>
//                   <th scope="col">Surname</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Age</th>
//                   <th scope="col">Color</th>
//                   <th scope="col">Contact by</th>
//               </tr>
//           </thead>
//       </table>
//     `;

//   table.innerHTML = tableContent;

//   return table;
// };

const generateTRContent = (trData) => {
  const { name, surname, email, age, color, prefContact } = trData;

  return `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>${color}</td>
        <td>${prefContact}</td>
      `;
};

const generateTBody = (tableData) => {
  return tableData.reduce((tbodyContent, trData) => {
    console.log(trData);
    const tr = generateTRContent(trData);
    tbodyContent += `<tr>${tr}</tr>`;

    return tbodyContent;
  }, '');
};

export const fillTable = (tableData) => {
  const tableBodyEl = document.querySelector('tbody');
  tableBodyEl.innerHTML = generateTBody(tableData);
};

export const updateTable = (trData) => {
  const tableBodyEl = document.querySelector('tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = generateTRContent(trData);

  tableBodyEl.appendChild(tr);
};

export const toggleTableFullState = () => {
  const table = document.querySelector('table');
  table.classList.toggle('hidden');
};

export const toggleTableEmptyState = () => {
  const tableEmptyState = document.querySelector('.table-empty-state');
  tableEmptyState.classList.toggle('hidden');
};

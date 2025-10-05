let start = document.getElementById('start');
let finish = document.getElementById('finish');
let taskname = document.getElementById('taskname');
let comp = document.getElementById('comp');
const form = document.getElementById('form');
const table = document.getElementById('table');
let isValid = true;
let start_error = document.getElementById('start_error');
let finish_error = document.getElementById('finish_error');
let taskname_error = document.getElementById('taskname_error');
let comp_error = document.getElementById('comp_error');

const clearErrors = () => {
  Array.from(document.querySelectorAll('.errortext')).forEach(
    (element) => (element.textContent = '')
  );
};

const setError = (texterror, element) => {
  element.textContent = texterror;
};

document.getElementById('createTask').addEventListener('click', function () {
  clearErrors();

  isValid = true;

  if (!start.value.trim()) {
    setError('Enter Start Date', start_error);
    isValid = false;
  }

  if (!finish.value.trim()) {
    setError('Enter Finish Date', finish_error);
    isValid = false;
  }

  if (!taskname.value.trim()) {
    setError('Enter Task Name', taskname_error);
    isValid = false;
  }

  if (!comp.value.trim()) {
    setError('Enter Status', comp_error);
    isValid = false;
  }

  if (isValid) {
    let tbody = document.getElementById('tbody');
    const rowsCount = tbody.querySelectorAll('tr').length || 0;

    let task = taskname.value;
    let trname = `${task}_tr`;

    const newRowHtml = `
        <tr id=${trname}>
            <td>${rowsCount + 1}</td>
            <td>${start.value}</td>
            <td>${finish.value}</td>
            <td data-task=${task}>${task}</td>
            <td>${comp.value}</td>
            <td><button id=${task}>remove</button></td>
        </tr>
    `;
    tbody.innerHTML += newRowHtml;

    document.getElementById(task).addEventListener('click', function (event) {
      if (!confirm('Are you sure you want to delete?')) return;
      const target = event.target;
      const tableRow = tbody.querySelector(`#${target.id}_tr`);
      tableRow.remove();
      //let tbl = event.parentNode.parentNode.parentNode;
      //let row = event.parentNode.parentNode.rowIndex;

      //tbl.deleteRow(row);
    });

    form.reset();
  }
});

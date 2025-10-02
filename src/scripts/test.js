let start = document.getElementById('start');
let finish = document.getElementById('finish');
let taskname = document.getElementById('taskname');
let comp = document.getElementById('comp');
let removeTask = document.getElementById('removeTask');
const form = document.getElementById('form');
const table = document.getElementById('table');
let isValid = true;
let start_error = document.getElementById('start_error');
let finish_error = document.getElementById('finish_error');
let taskname_error = document.getElementById('taskname_error');
let comp_error = document.getElementById('comp_error');
let myInput = document.getElementById('myInput');

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
    const remove = tbody.querySelectorAll('tr');

    const newRowHtml = `
        <tr>
            <td>${rowsCount + 1}</td>
            <td>${start.value}</td>
            <td>${finish.value}</td>
            <td>${taskname.value}</td>
            <td>${comp.value}</td>
            <td>${removeTask.value}</td>
        </tr>
    `;
    tbody.innerHTML += newRowHtml;
    form.reset();
  }
});

document.getElementById('removeTask').addEventListener('click', function deleteRow(el) {
  if (!confirm('Are you sure you want to delete?')) return;

  let tbl = el.parentNode.parentNode.parentNode;
  let row = el.parentNode.parentNode.rowIndex;

  tbl.deleteRow(row);
});
document.getElementById('myInput');
myInput.addEventListener('keyup', function () {
  let filter = myInput.value.toLowerCase(),
    filterItems = document.querySelectorAll('#list li');
  filterItems.forEach((item) => {
    if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

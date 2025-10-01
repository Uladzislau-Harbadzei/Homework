let start = document.getElementById('start');
let finish = document.getElementById('finish');
let taskname = document.getElementById('taskname');
let comp = document.getElementById('comp');
const form = document.getElementById('form');
const table = document.getElementById('table');
//let tasks = [];
let isValid = true;
let start_error = document.getElementById('start_error');
let finish_error = document.getElementById('finish_error');
let taskname_error = document.getElementById('taskname_error');
let comp_error = document.getElementById('comp_error');

//let getId = (id) => document.getElementById(id);

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

    const newRowHtml = `
        <tr>
            <td>${rowsCount + 1}</td>
            <td>${start.value}</td>
            <td>${finish.value}</td>
            <td>${taskname.value}</td>
            <td>${comp.value}</td>
        </tr>
    `;
    tbody.innerHTML += newRowHtml;
    form.reset();
  }
});

// а зачем здесь функция-конструктор???
// function Task(taskStart, taskFinish, taskName, taskComp) {
// this.taskStart = taskStart;
// this.taskFinish = taskFinish;
//  this.taskName = taskName;
//  this.taskComp = taskComp;
//}
// btn.onclick = function () {
//   let taskStart = start.value;
//   let taskFinish = finish.value;
//   let taskName = taskname.value;
//   let taskComp = taskcomp.value;
//   const newTask = new Task(taskStart, taskFinish, taskName, taskComp);
//   f1.reset();
//   tasks.push(newTask);

//   let td;
//   let tr = document.createElement('tr');
//   getId('tbody').appendChild(tr);
//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = tasks.length;
//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = newTask.taskStart;
//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = newTask.taskFinish;
//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = newTask.taskName;
//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = newTask.taskComp;
// };

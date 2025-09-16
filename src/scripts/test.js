let start = document.getElementById('start');
let finish = document.getElementById('finish');
let taskname = document.getElementById('taskname');
let comp = document.getElementById('comp');
let f1 = document.forms['forma'];
let tbody = document.getElementById('tbody');
let tasks = [];

let getId = id => document.getElementById(id);

function Task(taskStart, taskFinish, taskName, taskComp) {
  this.taskStart = taskStart
  this.taskFinish = taskFinish;
  this.taskName = taskName;
  this.taskComp = taskComp;
}
btn.onclick = function() {
  let taskStart = start.value;
  let taskFinish = finish.value;
  let taskName = taskname.value;
  let taskComp = taskcomp.value;
  const newTask = new Task(taskStart, taskFinish, taskName, taskComp);
  f1.reset();
  tasks.push(newTask);

  let td;
  let tr = document.createElement('tr');
  getId('tbody').appendChild(tr);
  td = document.createElement('td');tr.appendChild(td);
  td.textContent = tasks.length;
  td = document.createElement('td');tr.appendChild(td);
  td.textContent = newTask.taskStart;
  td = document.createElement('td');tr.appendChild(td);
  td.textContent = newTask.taskFinish;
  td = document.createElement('td');tr.appendChild(td);
  td.textContent = newTask.taskName;
  td = document.createElement('td');tr.appendChild(td);
  td.textContent = newTask.taskComp;
}
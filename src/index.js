/* eslint-disable radix */
/* eslint-disable import/no-cycle */

import './style.css';
import check from './checked.js';
import addNewTask from './addTask.js';
import removeCompleted from './status.js';
import removeTask from './removeTask.js';
import editTask from './editTask.js';
import { saveStorage, getStorage } from './storage.js';

const listContainer = document.querySelector('.container');
const addNewTaskInput = document.querySelector('#text');
const addNewTaskBtn = document.querySelector('.add');
const clearCompletedTask = document.querySelector('.clear');

const showTasks = () => {
  while (listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

  const tasks = getStorage();

  if (tasks != null) {
    for (let i = 0; i < tasks.length; i += 1) {
      const list = document.createElement('li');
      list.classList.add('list');
      list.id = tasks[i].index;
      list.draggable = true;

      const listFChild = document.createElement('div');
      listFChild.classList.add('div1');

      const input = document.createElement('input');
      input.classList.add('check');
      input.type = 'checkbox';
      input.name = 'check1';

      if (tasks[i].completed) {
        input.checked = true;
      }

      const label = document.createElement('label');
      label.contentEditable = true;
      label.classList.add('label');
      label.innerHTML = tasks[i].description;
      label.style.textDecoration = tasks[i].completed === true ? 'line-through' : 'none';
      label.style.color = '#444';

      const remove = document.createElement('span');
      remove.innerHTML = "<i class='fas fa-trash-alt'></i>";
      remove.style.display = 'flex';
      remove.style.cursor = 'pointer';
      remove.id = tasks.indexOf(tasks[i]);

      list.appendChild(listFChild);
      listFChild.appendChild(input);
      listFChild.appendChild(label);
      listFChild.appendChild(remove);
      listContainer.appendChild(list);

      label.addEventListener('focus', () => {
        remove.style.display = 'none';
        remove.style.color = '#fff';
        remove.style.cursor = 'pointer';
        remove.style.outline = 'none';
      });

      label.addEventListener('blur', (e) => {
        editTask(e.target, tasks, tasks[i]);
        showTasks();
      });

      input.addEventListener('change', (e) => {
        check(e.target, tasks[i]);
        saveStorage(tasks);
      });

      remove.addEventListener('mousedown', (e) => {
        e.preventDefault();
        removeTask(parseInt(remove.id));
        showTasks();
      });
    }
  }
};

addNewTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(addNewTaskInput);
});

clearCompletedTask.addEventListener('click', (e) => {
  e.preventDefault();
  removeCompleted();
  showTasks();
});

export default showTasks;

window.onload = showTasks;
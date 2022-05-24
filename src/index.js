/* eslint-disable radix */
/* eslint-disable import/no-cycle */

import './style.css';
import check from './check.js';
import addNewTask from './addlist.js';
import trashCompleted from './completed.js';
import removeTask from './removeTask.js';
import editTask from './editTask.js';
import { saveStorage, getStorage } from './storage.js';

const listContainer = document.querySelector('.container');
const addNewTaskInput = document.querySelector('#text');
const addNewTaskBtn = document.querySelector('.add');
const clearCompletedTask = document.querySelector('.clear');

const populateList = () => {
  while (listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

  const tasks = getStorage();

  if (tasks != null) {
    tasks.forEach((task) => {
      const list = document.createElement('li');
      list.classList.add('list');
      list.id = task.index;
      list.draggable = true;

      const listFChild = document.createElement('div');
      listFChild.classList.add('div1');

      const input = document.createElement('input');
      input.classList.add('check');
      input.type = 'checkbox';
      input.name = 'check1';

      if (task.completed) {
        input.checked = true;
      }

      const label = document.createElement('label');
      label.contentEditable = true;
      label.classList.add('label');
      label.innerHTML = task.description;
      label.style.textDecoration = task.completed === true ? 'line-through' : 'none';
      label.style.color = '#444';
      const span = document.createElement('span');
      span.classList.add('dot');

      const dot = document.createElement('i');
      dot.className += 'fas fa-ellipsis-v';

      const trash = document.createElement('span');
      trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
      trash.style.display = 'none';
      trash.id = tasks.indexOf(task);

      span.appendChild(dot);
      list.appendChild(listFChild);
      listContainer.appendChild(list);

      const children = [input, label, span, trash];
      children.forEach((child) => {
        listFChild.appendChild(child);
      });

      label.addEventListener('focus', () => {
        span.style.display = 'none';
        trash.style.display = 'flex';
        trash.style.color = '#fff';
        trash.style.cursor = 'pointer';
        label.style.textDecoration = 'none';
        list.style.backgroundColor = 'blue';
        list.style.opacity = '0.6';
        label.style.color = '#fff';
        label.style.outline = 'none';

        trash.addEventListener('mousedown', (e) => {
          e.preventDefault();
          removeTask(parseInt(trash.id));
        });
      });
      label.addEventListener('blur', (e) => {
        span.style.display = 'flex';
        trash.style.display = 'none';

        editTask(e.target, tasks, task);
      });

      input.addEventListener('change', (e) => {
        check(e.target, task);
        saveStorage(tasks);
      });
    });
  }
};

addNewTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(addNewTaskInput);
});

clearCompletedTask.addEventListener('click', (e) => {
  e.preventDefault();
  trashCompleted();
});

export default populateList;

window.onload = populateList;
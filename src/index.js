import './style.css';
import updateStaus from './status.js';

const todoList = [{
  description: 'Go to the market',
  completed: false,
  index: 4,
},
{
  description: 'Wash my clothes',
  completed: false,
  index: 2,
},
{
  description: 'Call my daddy',
  completed: false,
  index: 1,
},
];
todoList.sort((a, b) => a.index - b.index);

// Set up my local storage
const myLocalStorage = (items) => {
  localStorage.setItem('myList', JSON.stringify(items));
};
const getTasksFromLocalStorage = () => JSON.parse(localStorage.getItem('myList'));

const listDiv = document.querySelector('.todoList');
const showList = () => {
  const tList = getTasksFromLocalStorage();
  listDiv.innerHTML = '';
  for (let i = 0; i < tList.length; i += 1) {
    const task = tList[i];
    const list = ` <li class="todo" id="${task.index}">
      <input type="checkbox" class="check" id="list-checkbox" name="list-checkbox">
      ${task.description}<span class="icon"><i class="fa fa-ellipsis-v"></i></span> <span class="btn-del"><i class="fa fa-trash"></i></span>
  </li>`;

    listDiv.innerHTML += list;
  }

  const check = document.querySelectorAll('.check');
  for (let j = 0; j < check.length; j += 1) {
    check[j].addEventListener('change', (e) => {
      if (check[j].checked) {
        check[j].completed = true;
        updateStaus(e.target, tList[j]);
        e.target.parentNode.classList.toggle('checked');
        myLocalStorage(tList);
      } else {
        check[j].completed = false;
        updateStaus(e.target, tList[j]);
        e.target.parentNode.classList.remove('checked');
        myLocalStorage(tList);
      }
    });
  }
};

// Get Tasks From Local Storage
window.onload = () => {
  const getTodo = getTasksFromLocalStorage();

  if (getTodo === null) {
    myLocalStorage(todoList);
  }
  showList();
};
import './style.css';

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

const listDiv = document.querySelector('.todoList');

const showTasks = () => {
  listDiv.innerHTML = '';
  for (let i = 0; i < todoList.length; i += 1) {
    const task = todoList[i];
    const list = ` <li class="todo" id="${task.index}">
      <input type="checkbox" class="check" id="list-checkbox" name="list-checkbox">
      ${task.description}<span class="icon"><i class="fa fa-ellipsis-v"></i></span> <span class="btn-del"><i class="fa fa-trash"></i></span>
  </li>`;

    listDiv.innerHTML += list;
  }
};

window.onload = showTasks;
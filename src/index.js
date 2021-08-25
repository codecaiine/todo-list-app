import './style.css';

const todoList = [{
  description: 'Go to the market',
  completed: false,
  index: 1,
},
{
  description: 'Wash my clothes',
  completed: false,
  index: 2,
},
{
  description: 'Call my daddy',
  completed: false,
  index: 3,
},
];

const listDiv = document.getElementById('todo-list');

const showTasks = () => {
  for (let i = 0; i < todoList.length; i += 1) {
    const task = todoList[i];
    const list = ` <li class="task" id="${task.index}">
    <div>
      <input type="checkbox" class="check" id="list-checkbox" name="list-checkbox">
      <label>${task.description}</label>
    </div>
    <button type="submit"><i class="fa fa-ellipsis-v"></i></button>
  </li>`;

    listDiv.innerHTML += list;
  }
};

window.onload = showTasks;
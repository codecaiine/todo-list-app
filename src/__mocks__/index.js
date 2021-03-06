const showTasks = (tasks) => {
  document.body.innerHTML = '';
  const ul = document.createElement('ul');
  ul.className = 'list-container';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.id = task.index;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
};

export default showTasks;
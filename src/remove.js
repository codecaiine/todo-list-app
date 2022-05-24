import showTasks from './showTodos.js';
import { setLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTodos.js';
import setIndex from './index.js';

const removeTodo = (key) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice((key - 1), 1);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default removeTodo;
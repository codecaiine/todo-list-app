/* eslint-disable import/no-cycle */
import { saveStorage, getStorage } from './storage.js';
import showTasks from './index.js';

const addTask = (input) => {
  const taskList = getStorage();
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: input.value,
  };

  taskList.push(task);

  saveStorage(taskList);
  showTasks(taskList);
  return task;
};

export default addTask;
/**
 * @jest-environment jsdom
 */
import status from '../src/status.js';
import { editTodo, clearChecked } from '../src/addAndRemove.js';

describe('editing a task', () => {
  const todos = [{
    description: 'Walk The Dog',
    completed: false,
    index: 1,
  },

  {
    description: 'Do Laundry',
    completed: false,
    index: 2,
  },

  ];

  document.body.innerHTML = '<p class="description" id="para"></p>';
  const para = document.getElementById('para');

  test('if task description changes after edit', () => {
    para.innerHTML = 'Hello';
    editTodo(para, todos[0], todos);
    expect(todos[0].description).not.toMatch('Walk The Dog');
  });

  test('if task description changes after edit', () => {
    para.innerHTML = 'Hello';
    editTodo(para, todos[0], todos);
    expect(todos[0].description).toMatch('Hello');
  });
});

describe('updating the completed status of a task', () => {
  document.body.innerHTML = '<input type="checkbox" id="checkbox">';
  const checkbox = document.getElementById('checkbox');
  const todos = [{
    description: 'Walk The Dog',
    completed: false,
    index: 1,
  },

  {
    description: 'Do Laundry',
    completed: false,
    index: 2,
  },

  ];

  test('Update completed status to true', () => {
    checkbox.checked = true;
    status(checkbox, todos[1]);
    expect(todos[1].completed).toBeTruthy();
  });

  test('Change completed status to false', () => {
    checkbox.checked = false;
    status(checkbox, todos[1]);
    expect(todos[1].completed).toBeFalsy();
  });
});

describe('clear completed tasks', () => {
  let todos = [{
    description: 'Walk The Dog',
    completed: true,
    index: 1,
  },

  {
    description: 'Do Laundry',
    completed: false,
    index: 2,
  },
  {
    description: 'Run Away',
    completed: true,
    index: 3,
  },

  ];

  todos = todos.filter((task) => !task.completed);

  test('Check array length after clearing completed tasks', () => {
    clearChecked(todos);
    expect(todos).toHaveLength(1);
  });

  test('Update index after clearing completed tasks', () => {
    clearChecked(todos);
    expect(todos[0].index).toBe(1);
  });
});
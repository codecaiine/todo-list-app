/**
 * @jest-environment jsdom
 */
import { addTodo, removeTodo } from '../src/addAndRemove.js';

describe('adding a new todo list', () => {
  document.body.innerHTML = '<input type="text" placeholder="Add to your list..." id="inputList">';
  const inputList = document.getElementById('inputList');
  inputList.value = 'Kossi';
  const todos = [];

  test('Add two new tasks to the list', () => {
    addTodo(todos);
    addTodo(todos);
    expect(todos).toHaveLength(1);
  });

  test('Check description of first task', () => {
    expect(todos[0].description).toBe('Kossi');
  });

  test('Check status of first task', () => {
    expect(todos[0].completed).toBe(false);
  });

  test('Check index of second task', () => {
    expect(todos[0].index).toBe(1);
  });
});

describe('deleting a task from the list', () => {
  const todos = [{
    description: 'Walking the wire',
    completed: false,
    index: 1,
  },

  {
    description: 'Go to supermarket',
    completed: false,
    index: 2,
  },

  {
    description: 'Visit my family',
    completed: false,
    index: 3,
  },

  ];

  test('Delete task with index 2', () => {
    removeTodo(todos, 2);
    expect((todos)).toHaveLength(3);
  });

  test('Update index after task deletion', () => {
    expect(todos[2].index).toBe(3);
  });
});
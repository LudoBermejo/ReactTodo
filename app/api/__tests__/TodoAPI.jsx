import React from 'react';
import TodoAPI from 'TodoAPI';
import uuid from 'node-uuid';

describe('TodoAPI', () => {
  it('should gets emmpty array at first', () => {
    expect(TodoAPI.getTodos()).toEqual([]);
  });

  it('should gets emmpty array if you put a non array ', () => {
    TodoAPI.setTodos('invalid');
    expect(TodoAPI.getTodos()).toEqual([]);

    TodoAPI.setTodos(55);
    expect(TodoAPI.getTodos()).toEqual([]);
  });

  it('should store valid data if you put a array ', () => {
    TodoAPI.setTodos(['demo', 'demo2']);
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(['demo', 'demo2']);

    const complexArray = [
      {
        id: uuid(),
        value: 'first',
        completed: false
      },
      {
        id: uuid(),
        value: 'Second',
        completed: false
      },
      {
        id: uuid(),
        value: 'Third',
        completed: false
      },
      {
        id: uuid(),
        value: 'Fourth',
        completed: false
      }
    ];

    TodoAPI.setTodos(complexArray);

    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(complexArray);
  });

  it('should return valid data if you put a array ', () => {

    window.localStorage.setItem('todos', JSON.stringify(['demo', 'demo2']) );
    expect(TodoAPI.getTodos()).toEqual(['demo', 'demo2']);

    const complexArray = [
      {
        id: uuid(),
        value: 'first',
        completed: false
      },
      {
        id: uuid(),
        value: 'Second',
        completed: false
      },
      {
        id: uuid(),
        value: 'Third',
        completed: false
      },
      {
        id: uuid(),
        value: 'Fourth',
        completed: false
      }
    ];

    window.localStorage.setItem('todos', JSON.stringify(complexArray));

    expect(TodoAPI.getTodos()).toEqual(complexArray);
  });
});


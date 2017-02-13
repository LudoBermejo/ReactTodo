import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TodoList from 'TodoList';
import TodoItem from 'TodoItem';
import TestUtils from 'react-addons-test-utils';
import uuid from 'node-uuid';

describe('TodoList', () => {
  it('renders properly', () => {
    const values = [
      {
        id: uuid(),
        value: 'test_one',
        completed: false
      },
      {
        id: uuid(),
        value: 'test_two',
        completed: false
      }
    ];

    const todoList = renderer.create(<TodoList todoList={values} onChangeItemComplete={() => {}} />).toJSON();
    expect(todoList).toMatchSnapshot();
  });

  describe('List items properly', () => {
    it('renders all list of items', () => {
      const values = [
        {
          id: uuid(),
          value: 'test_one',
          completed: false
        },
        {
          id: uuid(),
          value: 'test_two',
          completed: false
        }
      ];

      const todoList = mount(<TodoList todoList={values} onChangeItemComplete={() => {}} />);
      expect(todoList.find('li').length).toBe(2);
      expect(todoList.find(TodoItem).length).toBe(2);
    });
  });

});


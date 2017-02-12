import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TodoList from 'TodoList';
import TodoItem from 'TodoItem';
import TestUtils from 'react-addons-test-utils';

describe('TodoList', () => {
  it('renders properly', () => {
    const values = [
      {
        id: 1,
        value: 'test_one'
      },
      {
        id: 2,
        value: 'test_two'
      }
    ];

    const todoList = renderer.create(<TodoList todoList={values} />).toJSON();
    expect(todoList).toMatchSnapshot();
  });

  describe('List items properly', () => {
    it('renders all list of items', () => {
      const values = [
        {
          id: 1,
          value: 'test_one'
        },
        {
          id: 2,
          value: 'test_two'
        }
      ];

      const todoList = mount(<TodoList todoList={values} />);
      expect(todoList.find('li').length).toBe(2);
      expect(todoList.find(TodoItem).length).toBe(2);
    })
  });
});


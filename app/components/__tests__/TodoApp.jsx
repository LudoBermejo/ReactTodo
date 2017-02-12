import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TodoApp from 'TodoApp';

describe('Todo app', () => {
  it('renders properly', () => {
    const todoApp = renderer.create(<TodoApp />).toJSON();
    expect(todoApp).toMatchSnapshot();
  });

  describe('Add to do item', () => {
    const todoApp = shallow(<TodoApp />);
    const numberOfItems = todoApp.instance().state.todoList.length;
    todoApp.instance().addTodoItem('demo');
    expect(todoApp.instance().state.todoList.length).toBe(numberOfItems + 1);
  });
});


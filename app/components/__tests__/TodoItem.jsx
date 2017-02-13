import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TodoItem from 'TodoItem';
import uuid from 'node-uuid';

describe('TodoItem', () => {
  it('renders properly', () => {
    const staticValue = {
      id: uuid(),
      value: 'one',
      completed: false
    };

    const todoItem = renderer.create(<TodoItem {...staticValue} onChangeComplete={() => {}} />).toJSON();
    expect(todoItem).toMatchSnapshot();
  });

  describe('Todo item show', () => {
    const uuidUnique = uuid()
    const staticValue = {
      id: uuidUnique,
      value: 'one',
      completed: false
    };

    const todoItem = shallow(<TodoItem {...staticValue} onChangeComplete={() => {}} />);
    expect(todoItem.find('li').length).toBe(1);
  });
});


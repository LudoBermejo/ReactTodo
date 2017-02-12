import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TodoItem from 'TodoItem';

describe('TodoItem', () => {
  it('renders properly', () => {
    const staticValue = {
      id: 1,
      value: 'one'
    };

    const todoItem = renderer.create(<TodoItem {...staticValue} />).toJSON();
    expect(todoItem).toMatchSnapshot();
  });

  describe('Todo item show', () => {
    const staticValue = {
      id: 1,
      value: 'one'
    };

    const todoItem = shallow(<TodoItem {...staticValue}/>);
    expect(todoItem.find('li').length).toBe(1);
    expect(todoItem.find('#list_item_1').length).toBe(1);
  });
});


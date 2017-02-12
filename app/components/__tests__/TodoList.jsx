import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import TodoList from 'TodoList';

describe('TodoList', function() {

  it('renders properly', function() {
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

})


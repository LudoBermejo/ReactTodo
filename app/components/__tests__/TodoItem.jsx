import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import TodoItem from 'TodoItem';

describe('TodoItem', function() {

  it('renders properly', function() {
    const staticValue = {
      id: 1,
      value: 'one'
    }

    const todoItem = renderer.create(<TodoItem {...staticValue} />).toJSON();
    expect(todoItem).toMatchSnapshot();
  });

})


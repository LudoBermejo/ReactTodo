import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import TodoApp from 'TodoApp';

describe('Todo app', function() {

  it('renders properly', function() {
    const todoApp = renderer.create(<TodoApp />).toJSON();
    expect(todoApp).toMatchSnapshot();
  });

})


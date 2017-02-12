import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TodosFilter from 'TodosFilter';

describe('TodosFilter ', () => {
  it('renders properly', () => {

    const mock = jest.fn();
    const todosFilter = renderer.create(<TodosFilter onSearch={mock} onFilterByCompleted={mock} />).toJSON();
    expect(todosFilter).toMatchSnapshot();
  });

  describe('works as expected', () => {
    it('call onSearch if input has changed', () => {
      const mock1 = jest.fn();
      const mock2 = jest.fn();
      const todosFilter = mount(<TodosFilter onSearch={mock1} onFilterByCompleted={mock2} />);
      const first = todosFilter.find('input[type="search"]');
      first.node.value = 'fff';
      first.simulate('change', first);
      expect(mock1).toHaveBeenCalledWith('fff');
    })
    it('call onFilterByCompleted if input has changed', () => {
      const mock1 = jest.fn();
      const mock2 = jest.fn();
      const todosFilter = mount(<TodosFilter onSearch={mock1} onFilterByCompleted={mock2} />);
      const first = todosFilter.find('input[type="checkbox"]');
      first.node.value = 'fff';
      first.simulate('change', first);
      expect(mock2).toHaveBeenCalledWith('fff');
    })
  })
});


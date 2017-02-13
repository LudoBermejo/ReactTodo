import React from 'react';
import TodoList from 'TodoList';
import AddTodoItem from 'AddTodoItem';
import TodosFilter from 'TodosFilter';
import uuid from 'node-uuid';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.addTodoItem = this.addTodoItem.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchText: '',
      filterByComplete: false,
      todoList: [
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
      ]
    };
  }

  search(value) {
    this.setState({ value });
  }

  addTodoItem(value) {
    const todoList = this.state.todoList;

    this.setState({
      todoList: [
        ...todoList,
        {
          id: uuid(),
          value,
          completed: false
        }
      ]
    });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <TodosFilter onSearch={this.search} />
        <TodoList todoList={todoList} />
        <AddTodoItem onAddItem={this.addTodoItem} />
      </div>
    );
  }
}


import React from 'react';
import TodoList from 'TodoList';
import AddTodoItem from 'AddTodoItem';
import TodosFilter from 'TodosFilter';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.addTodoItem = this.addTodoItem.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      todoList: [
        {
          id: 1,
          value: 'first',
          completed: false
        },
        {
          id: 2,
          value: 'Second',
          completed: false
        },
        {
          id: 3,
          value: 'Third',
          completed: false
        },
        {
          id: 4,
          value: 'Fourth',
          completed: false
        }
      ]
    };
  }

  search(value) {
    console.log(value);
  }

  addTodoItem(value) {

    const todoList = this.state.todoList;

    todoList.push({
      id: this.state.todoList.length + 1,
      value,
      completed: false
    });

    this.setState({
      todoList
    });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <TodosFilter onSearch={this.search}  />
        <TodoList todoList={todoList} />
        <AddTodoItem onAddItem={this.addTodoItem} />
      </div>
    );
  }
}


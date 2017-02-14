import uuid from 'node-uuid';
import React from 'react';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodoItem from 'AddTodoItem';
import TodosFilter from 'TodosFilter';
import TodoAPI from 'TodoAPI';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.addTodoItem = this.addTodoItem.bind(this);
    this.search = this.search.bind(this);
    this.changeCompleteTodo = this.changeCompleteTodo.bind(this);
    this.state = {
      searchText: '',
      filterByComplete: false,
      todoList: TodoAPI.getTodos()
    };
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todoList);
  }

  search(value) {
    this.setState({ ...value });
  }

  addTodoItem(value) {
    const todoList = this.state.todoList;
    this.setState({
      todoList: [
        ...todoList,
        {
          id: uuid(),
          value,
          completed: false,
          createdAt: moment().unix()
        }
      ]
    });
  }

  changeCompleteTodo(id) {
    this.setState({
      todoList: this.state.todoList.map((item) => {
        const todo = item;
        if (todo.id === id) {
          todo.completed = !item.completed;
          todo.completedAt = todo.completed ? moment().unix() : undefined;
        }
        return todo;
      })
    });
  }

  render() {
    const { todoList, searchText, filterByComplete } = this.state;
    const filteredTodo = TodoAPI.searchTodos(todoList, filterByComplete, searchText);
    return (
      <div>
        <h1>Todo</h1>
        <TodosFilter onSearch={this.search} />
        <TodoList todoList={filteredTodo} onChangeItemComplete={this.changeCompleteTodo} />
        <AddTodoItem onAddItem={this.addTodoItem} />
      </div>
    );
  }
}


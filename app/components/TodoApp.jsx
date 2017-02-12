import React from 'react';
import TodoList from 'TodoList';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 1,
          value: 'first'
        },
        {
          id: 2,
          value: 'Second'
        },
        {
          id: 3,
          value: 'Third'
        },
        {
          id: 4,
          value: 'Fourth'
        }
      ]
    };
  }

  render() {
    const {todoList} = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <TodoList todoList={todoList}/>
      </div>
    );
  }
}


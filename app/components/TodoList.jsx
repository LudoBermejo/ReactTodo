import React from 'react';
import TodoItem from 'TodoItem';

export default class TodoList extends React.Component {

  static get propTypes() {
    todoList: React.PropTypes.array.isRequired;
  }

  renderList(listOfTodos) {
    return listOfTodos.map(item => <TodoItem key={item.id} {...item} />);
  }

  render() {
    const { todoList } = this.props;
    return (
      <div>
        <h1>List of items:</h1>
        <ul>
          {this.renderList(todoList)}
        </ul>
      </div>
    );
  }

}

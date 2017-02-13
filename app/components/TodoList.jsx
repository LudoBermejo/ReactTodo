import React from 'react';
import TodoItem from 'TodoItem';

const TodoList = (props) => {
  const renderList = listOfTodos => listOfTodos.map(item => <TodoItem key={item.id} {...item} onChangeComplete={props.onChangeItemComplete} />);

  const { todoList } = props;
  return (
    <div>
      <h1>List of items:</h1>
      <ul>
        {renderList(todoList)}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todoList: React.PropTypes.array.isRequired,
  onChangeItemComplete: React.PropTypes.func.isRequired
};

export default TodoList;

import React from 'react';
import moment from 'moment';

const TodoItem = (props) => {
  const { id, value, completed, createdAt, completedAt } = props;

  function renderCreatedAt(createdAt, completedAt) {

    if(!completedAt) {
      return `Created ${moment.unix(createdAt).format('DD MM YYYY | HH:mm')}`;
    } else {
      return `Completed ${moment.unix(completedAt).format('DD MM YYYY | HH:mm')}`;
    }
  }

  function onChangeComplete(e) {
    e.preventDefault();
    props.onChangeComplete(id);
  }
  return (
    <li
      id={`list_item_${id}`}
      onClick={onChangeComplete}
      className="todo-item"
    >
      <input
        type="checkbox"
        checked={completed}
      />
      <p>{value}</p>
      <p>{renderCreatedAt(createdAt, completedAt)}</p>
    </li>
  );
};

TodoItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  createdAt: React.PropTypes.number.isRequired,
  completedAt: React.PropTypes.number,
  onChangeComplete: React.PropTypes.func.isRequired
};

export default TodoItem;

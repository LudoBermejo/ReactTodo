import React from 'react';

const TodoItem = (props) => {
  const { id, value } = props;
  return (
    <li id={`list_item_${id}`}>
      {id}: {value}
    </li>
  );
};

TodoItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
};

export default TodoItem;

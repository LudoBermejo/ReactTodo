import React from 'react';

const TodoItem = (props) => {
  const { id, value, completed } = props;

  function onChangeComplete(e) {
    e.preventDefault();
    props.onChangeComplete(id);
  }
  return (
    <li id={`list_item_${id}`} onClick={onChangeComplete}>
      <input type="checkbox" checked={completed} style={{"pointer-events": "none"}} />
      {value}
    </li>
  );
};

TodoItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onChangeComplete: React.PropTypes.func.isRequired
};

export default TodoItem;

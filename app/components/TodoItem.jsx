import React from 'react';

export default class TodoItem extends React.Component {

  render() {
    const { id, value } = this.props;
    return (
      <li id={"list_item_" + id}>
        {id}: {value}
      </li>
    );
  }

}
TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  value: React.PropTypes.string.isRequired
}
